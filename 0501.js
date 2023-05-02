// 変数を宣言し、数値を代入して、その数値が正の数かどうかを判定して、正の数の場合は"正の数です"、0の場合は"0です"、
// 負の数の場合は"負の数です"とコンソールに出力するプログラムを書いてください。
// 【・】正解
// let num = 10;
// if (num > 0) {
//   console.log("正の数です");
// } else if (num === 0) {
//   console.log("0です");
// } else {
//   console.log("負の数です");
// }

const number = 0;
if (number > 0) {
  console.log('正の数です');
} else if (number < 0) {
  console.log('負の数です');
} else {
  console.log('0です');
}

// 変数を宣言し、2つの数値を代入して、その2つの数値を比較して、
// 大きい方の数値をコンソールに出力するプログラムを書いてください
// let num1 = 10;
// let num2 = 20;

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

const num1 = 10;
const num2 = 5;
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// 変数を宣言し、数値を代入して、その数値が1桁か2桁か3桁以上かを判定して、
// 桁数に応じたメッセージをコンソールに出力するプログラムを書いてください。
// let num = 123;

// if (num < 10) {
//   console.log("1桁の数値です");
// } else if (num < 100) {
//   console.log("2桁の数値です");
// } else {
//   console.log("3桁以上の数値です");
// }
const sampleNum = 111;
if (sampleNum < 10) {
  console.log('１桁の数値です');
} else if (sampleNum < 100) {
  console.log('2桁の数値です');
} else {
  console.log('3桁の数値です');
}

// 変数を宣言し、配列を代入して、その配列の中にある文字列の中に特定の文字列が含まれるかどうかを判定して、
// 含まれる場合はその文字列をコンソールに出力するプログラムを書いてください。
// let arr = ["apple", "banana", "orange"];
// let searchStr = "an";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].includes(searchStr)) {
//     console.log(arr[i]);
//   }
// }
const word = ['あか', 'あお', 'かお', 'あさがお', 'あおみどり'];
const resultWord = word.filter((value) => value.match('あ'));
console.log(resultWord);

// 変数を宣言し、数値を代入して、その数値が奇数か偶数かを判定して、奇数の場合は"奇数です"、
// 偶数の場合は"偶数です"とコンソールに出力するプログラムを書いてください。

const numbers = 24;
if (numbers % 2 === 0) {
  console.log('偶数です');
} else {
  console.log('奇数です');
}
