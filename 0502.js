// whileループを使って、1から50までの数字をコンソールに出力するプログラムを書いてください。
// let i = 1;
// while(i <= 100){
//   console.log(i);
//   i++;
// }
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

// forループを使って、5から1までの数字を逆順でコンソールに出力するプログラムを書いてください。
// 【・】逆順(i--)は理解。forループの書き方が分からず、0417.jsを参考にした。
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
//   }

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// 変数を宣言し、1から20までの整数値を代入し、その値が偶数か奇数かを判定して、
// 偶数ならば"偶数です"、奇数ならば"奇数です"とコンソールに出力するプログラムを書いてください。
// let num = 20;

// if (num % 2 === 0) {
//   console.log("偶数です");
// } else {
//   console.log("奇数です");
// }

const number = 11;

if (number % 2 === 0) {
  console.log('偶数です');
} else {
  console.log('奇数です');
}

// 変数を宣言し、配列を代入して、その配列の中にある文字列の中に特定の文字列が含まれるかどうかを判定し、
// 含まれる場合はその文字列をコンソールに出力するプログラムを書いてください。
// let arr = ["apple", "banana", "orange"];
// let searchStr = "an";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].includes(searchStr)) {
//     console.log(arr[i]);
//   }
// }
const word = ['ゲーム', 'ジュース', 'ブーム', 'アーム'];
const resultWord = word.filter((value) => value.match('ーム'));
console.log(resultWord);

// 変数を宣言し、2つの数値を代入して、その2つの数値を比較して、
// 小さい方の数値をコンソールに出力するプログラムを書いてください
// let num1 = 10;
// let num2 = 20;

// if (num1 < num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }
const num1 = 11;
const num2 = 22;
if (num1 < num2) {
  console.log(num1);
} else {
  console.log(num2);
}
