// 変数を宣言し、1から10までの整数値を代入し、その値が偶数か奇数かを判定して、
// 偶数ならば"偶数です"、奇数ならば"奇数です"とコンソールに出力するプログラムを書いてください。
// 【・】変数を宣言し損ねていた
// let num = 5;

// if (num % 2 === 0) {
//   console.log("偶数です");
// } else {
//   console.log("奇数です");
// }

if (number / 2) {
  console.log('偶数です');
} else {
  console.log('奇数です');
}

// 配列を使って、5つの整数を格納し、その数値の中から最大値を探して、
// その最大値をコンソールに出力するプログラムを書いてください。
// const numbers = [4, 8, 2, 10, 5];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("最大値は" + max + "です");

const numbers = [6, 7, 8, 10, 11];
console.log(Math.max(...numbers));

// 関数を使って、3つの引数を受け取り、その3つの引数を文字列として結合したものを返すプログラムを書いてください。
// function concatenateStrings(str1, str2, str3) {
//     return str1 + str2 + str3;
//   }
function threeComments(word1, word2, word3) {
  return word1 + word2 + word3;
}

// forループを使って、1から50までの数字で、3の倍数の場合は"Fizz"、5の倍数の場合は"Buzz"、3と5の倍数の場合は"FizzBuzz"、
// それ以外の場合は数字をコンソールに出力するプログラムを書いてください。
// 【・】3の倍数、5の倍数、3と5の倍数の書き方が分からない
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

for (let i = 1; i <= 50; i++);
if (i) {
  console.log('Fizz');
} else {
  if (i) console.log('Buzz');
}
{
  if (i) console.log('FizzBuzz');
}

// 配列を使って、10個の整数を格納し、その数値の中から最小値と最大値を探して、
// その最小値と最大値をコンソールに出力するプログラムを書いてください。
// const numbers = [5, 10, 2, 8, 3, 15, 7, 20, 1, 9];
// let minValue = numbers[0];
// let maxValue = numbers[0];

// for(let i = 1; i < numbers.length; i++){
//   if(numbers[i] < minValue){
//     minValue = numbers[i];
//   }
//   if(numbers[i] > maxValue){
//     maxValue = numbers[i];
//   }
// }

// console.log("最小値: " + minValue);
// console.log("最大値: " + maxValue);

const tenNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
