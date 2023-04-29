// 変数を宣言し、数値を代入して、その数値が偶数であるか奇数であるかを判定して、
// "偶数です"または"奇数です"とコンソールに出力するプログラムを書いてください。
// 【・】正解
// let num = 10;

// if(num % 2 == 0){
//   console.log("偶数です");
// } else {
//   console.log("奇数です");
// }
const number = 15;
if (number % 2 === 0) {
  console.log('偶数です');
} else {
  console.log('奇数です');
}

// 変数を宣言し、数値を代入して、その数値が10以下であれば"10以下です"、20以下であれば"20以下です"、
// それ以外であれば"20より大きいです"とコンソールに出力するプログラムを書いてください。
const num = 20;
if (num <= 10) {
  console.log('10以下です');
} else if (num <= 20) {
  console.log('20以下です');
} else {
  console.log('20以上です');
}

// 変数を宣言し、文字列を代入して、その文字列を逆さまにしてコンソールに出力するプログラムを書いてください。
const word = 'やきそば';
const result = word.split('').reverse().join('');
console.log(result);

// 配列を使って、5つの文字列を格納し、その文字列の中から特定の文字を含む文字列を探して、
// その文字列をコンソールに出力するプログラムを書いてください。

const fiveWord = ['タコ', 'イカ', 'スルメイカ', 'イカスミ', 'イタコ'];
const resultWord = fiveWord.filter((value) => value.match('イ'));
console.log(resultWord);

// 変数を宣言し、数値を代入して、その数値が3で割り切れるかどうかを判定して、
// 割り切れる場合は"3で割り切れます"、割り切れない場合は"3で割り切れません"とコンソールに出力するプログラムを書いてください。
const testNumber = 22;
if (testNumber % 3 === 0) {
  console.log('3で割り切れます');
} else {
  console.log('３で割り切れません');
}
