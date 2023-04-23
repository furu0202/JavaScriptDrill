// 変数を宣言し、"Hello, World!"という文字列を代入して、その文字列をコンソールに出力するプログラムを書いてください。
// 【・】正解
// let greeting = "Hello, World!";
// console.log(greeting);

const word = 'Hello world';
console.log(word);

// if文を使って、変数の値が10以上の場合は"10以上"、10未満の場合は"10未満"とコンソールに出力するプログラムを書いてください。
// let num = 7;

// if(num >= 10) {
//   console.log("10以上");
// } else {
//   console.log("10未満");
// }

if (number >= 10) {
  console.log('10以上');
} else {
  console.log('10未満');
}

// 配列を使って、5つの文字列を格納し、forループを使って、配列の全ての要素をコンソールに出力するプログラムを書いてください。
// 【・】[i]忘れていた
// let strings = ["apple", "banana", "cherry", "date", "elderberry"];
// for (let i = 0; i < strings.length; i++) {
//   console.log(strings[i]);
// }
const fiveWords = ['あ', 'い', 'う', 'え', 'お'];
for (let i = 0; i < fiveWords.length; i++) {
  console.log(fiveWords);
}

// 関数を使って、2つの引数を受け取り、その2つの引数を足した値を返すプログラムを書いてください。
// 【・】正解
// function add(a, b) {
//     return a + b;
//   }
function add(a, b) {
  return a + b;
}

// whileループを使って、1から50までの数字で、3の倍数の場合は"Fizz"、5の倍数の場合は"Buzz"、3と5の倍数の場合は"FizzBuzz"、
// それ以外の場合は数字をコンソールに出力するプログラムを書いてください。
// 【・】letでの定義は出来たが、if文の部分ができなかった。
// let i = 1;
// while (i <= 50) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

let i = 1;
while (i <= 50);
