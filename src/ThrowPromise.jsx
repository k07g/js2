// Promiseが終了したかを表すフラグ変数
let flag = false;

export default function ThrowPromise() {
    // Promiseが完了していれば、本来の結果を表示
    if (flag) {
        return <p>正しく表示できました</p>
    }
    // ロード中の場合はPromiseを投げる
    throw new Promise((resolve, reject) => {
        // 3000ミリ秒後に解決(resolve)する処理
        setTimeout(() => {
            flag = true;
            resolve('Success!!');
        }, 3000);
    });
}