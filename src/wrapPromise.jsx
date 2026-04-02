export default function wrapPromise(promise) {
    // Promisenの状態を管理(pending, fulfilled, rejected)
    let status = 'pending';
    // Promiseから受け取ったデータ
    let data;
    // 元のPromiseに後処理を追加
    let wrapper = promise.then(
        // 成功時はstatusをfulfilledにして、データを保存
        (res) => {
            status = 'fulfilled';
            data = res;
        },
        // 失敗時はstatusをrejectedにして、エラーを保存
        (err) => {
            status = 'rejected';
            data = err;
        }
    );
    // 戻り値はPromiseの状態に応じて値を返すgetメソッドを持つオブジェクト
    return {
        get() {
            switch (status) {
                case `fulfilled`:
                    return data; // 成功していればデータを返す
                case `rejected`:
                    throw data; // 失敗していればエラーを投げる
                case `pending`:
                    throw wrapper; // ロード中であればPromiseを投げる
                default:
                    break;
            }
        }
    }
}