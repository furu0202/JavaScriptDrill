// 1【4月16日】変数xとyに数値を代入し、その和を表示するプログラムを作成してください。
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log(sum);
//   }

const x = 6;
const y = 7;
const z = x + y;
console.log(z);

// 2【4月16日】forループを使用して、1から10までの整数をすべて表示するプログラムを作成してください。
// 【？】forループが何か分からない。
// 【・】i < 10 にしていたので１から９までしか出力されなかった。
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

for (i = 1; i <= 10; i++) {
  console.log(i);
}

// 3【4月16日】 配列numbersに10個の整数が格納されているとします。配列numbersのすべての要素を2倍にして、
// 新しい配列doubledNumbersに格納するプログラムを作成してください。
// 【？】配列を2倍にする方法が分からない
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }
// // console.log(doubledNumbers);

const numbers = [1, 2, 6, 7, 8, 10, 11, 18, 40, 47];
const doubleNumbers = numbers.map(function (numbers) {
  return numbers * 2;
});
console.log(doubleNumbers);
