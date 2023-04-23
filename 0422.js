// 変数を宣言し、文字列を代入して、その文字列をコンソールに出力するプログラムを書いてください。
// 【・】正解
// let myString = "Hello, world!";
// console.log(myString);
const fruits = 'さくらんぼ';
console.log(fruits);

// forループを使って、1から10までの数字をコンソールに出力するプログラムを書いてください。
// 【・】過去問を参考に解いてみた。letの意味と不等号が不完全
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 関数を使って、3つの引数を受け取り、その3つの引数の平均値をコンソールに出力するプログラムを書いてください。
// 【・】引数の平均値をコンソールする方法が分からなかった
// function average(num1, num2, num3) {
//     let total = num1 + num2 + num3;
//     let avg = total / 3;
//     console.log(avg);
//   }
//   average(10, 20, 30);

function numbers(num1, num2, num3) {
  return;
}
console.log(numbers);

// 変数を宣言し、数値を代入して、その値が偶数か奇数かを判定して、偶数の場合は"偶数です"
// 奇数の場合は"奇数です"とコンソールに出力するプログラムを書いてください。
// let num = 7;

// if (num % 2 == 0) {
//     console.log("偶数です");
//   } else {
//     console.log("奇数です");
//   }

const number = 11;
if (console.log('偶数です')) console.log('奇数です');

// 配列を使って、5つの数値を格納し、その数値の中から最大値を探して、
// その最大値をコンソールに出力するプログラムを書いてください。
// 【・】数字の格納までは問題なし。数値の中から最大値を探す方法が分からない
// let numbers = [5, 12, 8, 2, 9];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

console.log('最大値は ' + max);
const fiveNumbers = [1, 6, 7, 8, 18];
const maxNumber = fiveNumbers.max(fiveNumbers);
console.log(maxNumber);
