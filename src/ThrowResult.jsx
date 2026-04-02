import wrapPromise from "./wrapPromise";

// 非同期でデータを取得するための関数
function getInfo() {
    return wrapPromise(new Promise((resolve, reject) => {
        // 2000ミリ秒後に50%の確率で成功、50%の確率で失敗する処理
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('成功しました！');
            } else {
                reject('失敗しました！');
            }}, 2000);
    }));
}

// Promiseの状態を管理するオブジェクトを取得
const info = getInfo();

export default function ThrowResult() {
    const result = info.get(); // Promiseの状態に応じて値を取得
    return <p>{result}</p>; // 結果を表示
}
