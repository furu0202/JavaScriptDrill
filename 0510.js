// 変数nameに自分の名前を代入し、console.log()を使用して、その値をコンソールに出力するプログラムを作成してください。
const myName = 'furu';
console.log(myName);

// 変数numberに数値を代入し、その数値が偶数か奇数かを判定するプログラムを作成してください。
// 偶数の場合は"偶数です"、奇数の場合は"奇数です"とコンソールに出力してください。
const number = 10;
if (number % 2 === 0) {
  console.log('偶数です');
} else {
  console.log('奇数です');
}

// 配列numbersに1から10までの整数が格納されているとき、forループを使用して、配列の全ての要素をコンソールに出力するプログラムを作成してください。
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// if文を使用して、変数scoreの値が80以上の場合に"合格"、80未満の場合に"不合格"とコンソールに出力するプログラムを作成してください。
const score = 80;
if (score >= 80) {
  console.log('合格');
} else if (score < 80) {
  console.log('不合格');
}

// whileループを使用して、1から10までの整数をコンソールに出力するプログラムを作成してください。
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
