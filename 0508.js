// 「Hello, World!」とコンソールに出力するプログラムを作成してください。
const text = 'Hello World';
console.log(text);

// 変数xとyにそれぞれ数値を代入し、その和をコンソールに出力するプログラムを作成してください。
const x = 5;
const y = 1;
console.log(x + y);

// 配列arrに[1, 2, 3, 4, 5]を代入し、forループを使用して、配列の中身をすべてコンソールに出力するプログラムを作成してください。
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr);
}

// 条件分岐を使用して、入力された数値が正の数、0、または負の数であるかを判定し、
// それぞれの場合に応じたメッセージをコンソールに出力するプログラムを作成してください。
const number = 0;
if (number === 0) {
  console.log('0です');
} else if (number > 0) {
  console.log('正の数です');
} else if (number < 0) {
  console.log('負の数です');
}

// 変数を宣言し、任意の文字列を代入し、その文字列の長さをコンソールに出力するプログラムを書いてください。
const str = 'programming';
console.log(str.length);
