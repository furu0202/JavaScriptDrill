// 配列numbersに1から5までの整数が格納されているとき、
// forループを使用して、配列の全ての要素をコンソールに出力するプログラムを作成してください。
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 以下は、if文を使用して、変数scoreの値が90以上の場合に"合格"、
// 90未満の場合に"不合格"とコンソールに出力するプログラムです。
const score = 89;

if (score >= 90) {
  console.log('合格');
} else {
  console.log('不合格');
}
