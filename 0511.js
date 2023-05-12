// 変数nameにあなたの名前を文字列として代入し、コンソールに「こんにちは、〇〇さん」と出力するプログラムを作成してください。
const myName = 'furu';
console.log('こんにちは' + myName + 'さん');

// 配列numbersに1から5までの整数が格納されているとき、forループを使用して、
// 配列の全ての要素をコンソールに出力するプログラムを作成してください。
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 変数を宣言し、文字列を代入して、その文字列を逆さまにしてコンソールに出力するプログラムを書いてください。
const word = 'シーラカンス';
const result = word.split('').reverse().join('');
console.log(result);

// /3つの変数を宣言し、その変数の値を掛けて、コンソールに出力するプログラムを書いてください。
const x = 4;
const y = 7;
const z = 9;
console.log(x * y * z);

// 変数を宣言し、文字列を代入して、その文字列の長さをコンソールに出力するプログラムを書いてください。
const str = 'ゴールデンウィーク';
console.log(str.length);
