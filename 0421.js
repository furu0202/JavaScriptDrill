// 変数を宣言し、自分の名前を代入して、その名前をコンソールに出力するプログラムを書いてください。
// 【・】正解 (変数のキャメルケース要反省)
// let myName = "あなたの名前";
// console.log(myName);
const myname = 'furu';
console.log(myname);

// prompt関数を使って、ユーザーに好きな数字を入力してもらい、その数字に1を加えた値をコンソールに出力するプログラムを書いてください。
// 【・】過去問を参考に解いたが、prompt関数の使い方がイマイチ分からない
// let num = prompt("好きな数字を入力してください：");
// num = parseInt(num);
// let result = num + 1;
// console.log(result);
let myNumber = prompt('11');
let result = plusone(myNumber); // 文字列を数値に変換
console.log(result);
