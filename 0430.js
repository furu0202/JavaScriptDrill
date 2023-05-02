// 変数を宣言し、2つの数値を代入して、その2つの数値を足した結果をコンソールに出力するプログラムを書いてください。
// let num1 = 10;
// let num2 = 5;
// let sum = num1 + num2;
// console.log(sum);
const number1 = 11;
const number2 = 18;
console.log(number1 + number2);

// 変数を宣言し、文字列を代入して、その文字列の長さをコンソールに出力するプログラムを書いてください。
// let str = "Hello, World!";
// console.log(str.length);
const word = 'イングリッシュ';
console.log(word.length);

// 変数を宣言し、数値を代入して、その数値が3で割り切れるかどうかを判定して、割り切れる場合は"3の倍数です"
// 、割り切れない場合は"3の倍数ではありません"とコンソールに出力するプログラムを書いてください。
// let num = 12;

// if (num % 3 === 0) {
//   console.log("3の倍数です");
// } else {
//   console.log("3の倍数ではありません");
// }
const num = 18;
if (num % 3 === 0) {
  console.log('3の倍数です');
} else {
  console.log('3の倍数ではありません');
}

// 変数を宣言し、配列を代入して、その配列の中にある数値の合計をコンソールに出力するプログラムを書いてください。
// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);
const numbers = [6, 7, 8, 18, 19];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// 変数を宣言し、文字列を代入して、その文字列を逆順にしてコンソールに出力するプログラムを書いてください。
const testWord = 'ゴールド';
const result = testWord.split('').reverse().join('');
console.log(result);
