// 変数を宣言し、文字列を代入して、その値をコンソールに出力するプログラムを書いてください。
// 【・】正解
// const myString = "Hello, World!";
// console.log(myString);
const item = '青色のペン';
console.log(item);

// 条件分岐を使って、変数の値が特定の文字列と一致する場合と一致しない場合で、
// コンソールにメッセージを出力するプログラムを書いてください。
// 【・】条件分岐(if文を使用すること)と変数の値の設定は理解
// 【・】特定の文字列と一致有無に応じてメッセージ出力のやり方が分からない
// let name = "Alice";
// if (name === "Alice") {
//   console.log("Hello, Alice!");
// } else {
//   console.log("You are not Alice.");
// }
// const color =  "blue"

// whileループを使って、1から10までの数字を順番にコンソールに出力するプログラムを書いてください。
// 【・】whileループに関して全く理解できなかった。
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

// 配列を使って、5つの数値を格納し、forループを使って、配列の要素を全て合計し、
// 合計値をコンソールに出力するプログラムを書いてください。
// 【・】配列の要素を全て合計する方法が分からない
// let numbers = [3, 6, 2, 8, 1];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

const numbers = [4, 6, 9, 10, 11];
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 関数を使って、3つの引数を受け取り、3つの引数の平均値を計算して返すプログラムを書いてください。
// 【・】３つの引数の平均値を計算して返す方法が分からない
// function calcAverage(num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     let average = sum / 3;
//     return average;
//   }
//   let result = calcAverage(5, 10, 15);
//   console.log(result);

function average(num1, num2, num3) {
  const sum = 2 + 6 + 10;
  const average = sum / 3;
  return average;
}
console.log(average);
