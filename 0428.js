// 変数を宣言し、任意の文字列を代入し、その文字列を逆順にしてコンソールに出力するプログラムを書いてください。
const food = 'potato';
console.log(food);

// 変数を宣言し、任意の文字列を代入し、その文字列の長さをコンソールに出力するプログラムを書いてください。
const str = 'lucky';
console.log(str.length);

// forループを使って、1から100までの数字で、7の倍数の場合は"lucky"、13の倍数の場合は"unlucky"、
// 7と13の倍数の場合は"lucky unlucky"、それ以外の場合は数字をコンソールに出力するプログラムを書いてください。
// 【・】7と13の倍数のとき、lucky unluckyがコンソールされなかったのでプログラムの順番を変更することで解決
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0 && i % 13 === 0) {
//       console.log("Lucky Unlucky");
//     } else if (i % 7 === 0) {
//       console.log("Lucky");
//     } else if (i % 13 === 0) {
//       console.log("Unlucky");
//     } else {
//       console.log(i);
//     }
//   }
for (let i = 1; i <= 100; i++) {
  if ((i % 7 === 0) & (i % 13 === 0)) {
    console.log('lucky unlucky');
  } else if (i % 7 === 0) {
    console.log('lucky');
  } else if (i % 13 === 0) {
    console.log('unlucky');
  } else {
    console.log(i);
  }
}

// 変数を宣言し、数値を代入して、
// その数値が正の数、負の数、または0であるかを判定して、"正の数です"、"負の数です"、
// または"0です"とコンソールに出力するプログラムを書いてください。
// 【・】正の数、負の数を判定する方法が不等号というのを理解していなかった
// let num = 5;
// if (num > 0) {
//   console.log("正の数です");
// } else if (num < 0) {
//   console.log("負の数です");
// } else {
//   console.log("0です");
// }

const number = y;
if (y > 0) {
  console.log('正の数です');
} else if (y < 0) {
  console.log('負の数です');
} else {
  console.log('0です');
}

// forループを使って、1から50までの数字で、3の倍数の場合は"Fizz"、5の倍数の場合は"Buzz"、3と5の倍数の場合は"FizzBuzz"、
// それ以外の場合は数字をコンソールに出力するプログラムを書いてください。
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
for (let i = 1; i <= 50; i++) {
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
