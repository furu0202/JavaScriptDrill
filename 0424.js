// 2つの数値を引数として受け取り、その2つの数値のうち、大きい方の値をコンソールに出力するプログラムを書いてください。
// 【・】数値を比較して大きい方の値をコンソールする方法が分からない。
// function getMax(num1, num2) {
//     if (num1 > num2) {
//       console.log(num1);
//     } else {
//       console.log(num2);
//     }
//   }
//   getMax(10, 5); /

function getNumber(num1,num2);
if (num1 < num2);
console.log("")

// 変数を宣言し、0から9までのランダムな整数値を代入して、
// その値が偶数か奇数かを判定し、偶数の場合は"偶数です"、奇数の場合は"奇数です"とコンソールに出力するプログラムを書いてください。
// 【・】ランダムな整数値の代入方法、奇数偶数の判定方法が理解できなかった
// let num = Math.floor(Math.random() * 10);
// if (num % 2 === 0) {
//   console.log(num + "は偶数です");
// } else {
//   console.log(num + "は奇数です");
// }

const number = 6;
if (number / 2 === 0){
    console.log("偶数です");
} else {
    console.log("奇数です");
}

// 配列を使って、10個の整数を格納し、その数値の中から最小値を探して、
// その最小値をコンソールに出力するプログラムを書いてください。
// let numbers = [4, 2, 8, 1, 5, 10, 3, 9, 7, 6]; // 配列に10個の整数を格納
// let min = numbers[0]; // 最小値の初期値を配列の最初の要素に設定

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) { // 配列の要素が現在の最小値より小さければ
//     min = numbers[i]; // 最小値を更新
//   }
// }

// console.log('最小値は' + min + 'です。');

const numbers = [1, 2, 5, 6, 7, 8, 9, 10, 11, 14];
console.log(Math.max(...numbers));


// forループを使って、1から20までの数字で、3の倍数の場合は数字をコンソールに出力しないようにするプログラムを書いてください。
// 【・】3の倍数の場合、コンソールしない方法が分からなかった
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//       continue; // 3の倍数の場合はループをスキップ
//     }
//     console.log(i); // 3の倍数でない場合は数字を出力
//   }
for (let i=1; i<= 20; i++){
    if (i % 3 === 0);
}
console.log(i);

// 関数を使って、3つの引数を受け取り、その3つの引数の中で最大値を返すプログラムを書いてください。
// 【・】最大値を返す方法が分からなかった。
// function getMaxValue(a, b, c) {
//     let max = a;
//     if (b > max) {
//       max = b;
//     }
//     if (c > max) {
//       max = c;
//     }
//     return max;
//   }
function maxNumbers(num1,num2,num3) {

}
return
