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

// if文を使って、変数の値が5以上の場合は"大きい数字です"、
// 5未満の場合は"小さい数字です"とコンソールに出力するプログラムを書いてください。
// 【・】不等号、elseの使い方がイマイチ理解できない
// let number = prompt("数字を入力してください");

// if (number >= 5) {
//   console.log("大きい数字です");
// } else {
//   console.log("小さい数字です");
// }
if (number > 5);
console.log('大きい数字です');
if (number < 5);
console.log('小さい数字です');

// 配列を使って、5つの文字列を格納し、ランダムに1つの文字列をコンソールに出力するプログラムを書いてください。
// 【・】ランダムに1つの文字列をコンソールする方法
// const strings = ["apple", "banana", "cherry", "orange", "pear"];
// const randomIndex = Math.floor(Math.random() * strings.length);
// const randomString = strings[randomIndex];
// console.log(randomString);

const words = ['あ', 'か', 'さ', 'た', 'な'];
console.log(words);

// 関数を使って、2つの引数を受け取り、その2つの引数を掛け算した値を返すプログラムを書いてください。
// function multiply(num1, num2) {
//   return num1 * num2;
// }

function multiply(num1, num2) {
  return num1 * num2;
}
const results = 4 * 6;
console.log(results);
