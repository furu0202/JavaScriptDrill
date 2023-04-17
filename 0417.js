// /2つの変数を宣言し、その変数の値を足して、コンソールに出力するプログラムを書いてください。
// let num1 = 10;
// let num2 = 5;
// let sum = num1 + num2;
// console.log(sum);
const x = 40;
const y = 47;
const z = x + y;
console.log(z);

// 条件分岐を使って、変数の値が特定の数値より大きい場合と小さい場合で、
// コンソールにメッセージを出力するプログラムを書いてください。
// let num = 15;
// let threshold = 10;

// if (num > threshold) {
//   console.log("numはthresholdより大きいです。");
// } else {
//   console.log("numはthreshold以下です。");
// }
const number = 9;
if (number > 10) {
  console.log('10より大きい値です');
} else {
  console.log('10より小さい値です');
}

// forループを使って、1から10までの数字を順番にコンソールに出力するプログラムを書いてください。
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
