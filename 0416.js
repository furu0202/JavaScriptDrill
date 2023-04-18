// 【4月16日】変数xとyに数値を代入し、その和を表示するプログラムを作成してください。
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log(sum);
//   }

const x = 6;
const y = 7;
const z = x + y;
console.log(z);

// 【4月16日】forループを使用して、1から10までの整数をすべて表示するプログラムを作成してください。
// 【？】forループが何か分からない。
// 【・】i < 10 にしていたので１から９までしか出力されなかった。
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

for (i = 1; i <= 10; i++) {
  console.log(i);
}

// 【4月16日】 配列numbersに10個の整数が格納されているとします。配列numbersのすべての要素を2倍にして、
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

// 【4月16日】関数multiplyを作成してください。
// この関数は、2つの数値を引数として受け取り、それらの積を返すものです。
// 【？】２つの数値を引数として受け取り、積を返す方法 (戻り値)
// function multiply(num1, num2) {
//     return num1 * num2;
//   }
//   const result = multiply(5, 6);
// console.log(result); // 結果:30

function multiply(num1, num2) {
  return 10 * 11;
}
const answer = multiply(10, 11);
console.log(answer);

// 【4月16日】オブジェクトpersonがあり、そのプロパティとしてnameとageが定義されています。
// オブジェクトpersonのageプロパティの値を1増やすプログラムを作成してください。
// 【？】プロパティの値を１増やすプログラムの書き方
// 【・】const person定義は問題なく出来たが、person.age++;で苦戦を強いられた
// let person = {
//     name: "John",
//     age: 30
//   };
//   person.age++;
// console.log(person);

const person = { name: 'furu', age: 26 };
person.age += 1;
console.log(person);
