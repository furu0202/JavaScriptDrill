// prompt関数を使って、ユーザーに好きな数字を入力してもらい、
// その数字が偶数か奇数かを判定し、コンソールに出力するプログラムを書いてください。
// 【・】問題の意図(prompt関数）が全く理解できない。
// let inputNumber = prompt("好きな数字を入力してください");
// let number = parseInt(inputNumber); // 文字列を数値に変換

// if (number % 2 === 0) {
//   console.log(number + "は偶数です");
// } else {
//   console.log(number + "は奇数です");
// }

// 配列を使って、10個の数値を格納し、配列の最大値と最小値をコンソールに出力するプログラムを書いてください。
// 【・】配列の最大値と最小値をコンソールする方法(Math)が分からなかった
// let numbers = [3, 8, 1, 6, 2, 9, 4, 7, 5, 10];
// let max = numbers[0];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log("最大値は" + max);
// console.log("最小値は" + min);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// forループを使って、10から1までの数字を逆順でコンソールに出力するプログラムを書いてください。
// 【・】逆順(i--)は理解。forループの書き方が分からず、0417.jsを参考にした。
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 関数を使って、数値を1つ受け取り、その数値が3の倍数かどうかを判定して、
// trueかfalseを返すプログラムを書いてください。
// 【・】関数の定義方法がイマイチ分からない
// function number(num) {
//   if (num % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isMultipleOfThree(num) {
  if (num % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

// オブジェクトを使って、あなたの好きな果物の名前と価格をプロパティとして持つオブジェクトを作成し、
// そのオブジェクトをコンソールに出力するプログラムを書いてください。
// 【・】正解 (オブジェクト名は要反省)
// const fruit = {
//     name: "りんご",
//     price: 100
//   };

console.log(fruit);
const mylike = { fruits: 'いちご', price: 200 };
console.log(mylike);
