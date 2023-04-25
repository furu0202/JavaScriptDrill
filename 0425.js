// 変数を宣言し、自分の名前を代入して、その名前をコンソールに出力するプログラムを書いてください。
// 【・】正解
const myName = 'furu';
console.log(myName);

// 配列を使って、5つの文字列を格納し、逆順で配列の全ての要素をコンソールに出力するプログラムを書いてください。
// 【・】調べながら実践してみた。
// const strings = ["apple", "banana", "cherry", "date", "elderberry"];

// for (let i = strings.length - 1; i >= 0; i--) {
//   console.log(strings[i]);
// }
let fiveWords = ['は', 'ひ', 'ふ', 'へ', 'ほ'];
fiveWords = fiveWords.reverse();
console.log(fiveWords);

// whileループを使って、1から100までの数字をコンソールに出力するプログラムを書いてください。
// 【・】正解
// let i = 1;
// while(i <= 100){
//   console.log(i);
//   i++;
// }
let i = 0;
while (i <= 100) {
  console.log(i);
  i++;
}

// 2つの数値を引数として受け取り、その2つの数値の平均値を返すプログラムを書いてください。
// 【・】平均値の返し方を間違えてしまった。
// function calcAverage(num1, num2) {
//     return (num1 + num2) / 2;
//   }
function average(num1, num2) {
  return num1 / num2;
}

// 変数を宣言し、1から10までのランダムな整数値を代入して、その値が素数かどうかを判定し、
// 素数であれば"素数です"、そうでなければ"素数ではありません"とコンソールに出力するプログラムを書いてください。
// 【・】ランダムな整数値を代入する変数の宣言方法が分からない
// 【・】素数かどうかの判別方法が分からなかった
// // 1から10までのランダムな整数値を生成
// const num = Math.floor(Math.random() * 10) + 1;

// // numが素数かどうかを判定する関数
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // 結果をコンソールに出力
// if (isPrime(num)) {
//   console.log(`${num}は素数です`);
// } else {
//   console.log(`${num}は素数ではありません`);
// }
