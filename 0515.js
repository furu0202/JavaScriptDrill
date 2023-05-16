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

// 関数addを定義し、引数xとyを受け取り、その和を返すプログラムを作成してください。
// また、関数を使用して、数値を加算した結果をコンソールに出力するプログラムを作成してください。
function add(x, y) {
  return x + y;
}
const result = add(4, 5);
console.log(result);

// 変数を宣言し、2つの数値を代入して、その2つの数値を比較して、
// 小さい方の数値をコンソールに出力するプログラムを書いてください。

const number1 = 1;
const number2 = 2;

if (number1 < number2) {
  console.log(number1);
} else {
  console.log(number2);
}

// 変数を宣言し、適当な文字列を2つ代入して、それぞれの値をコンソールに出力するプログラムを書いてください。
const word1 = 'えび';
const word2 = 'シャケ';
console.log(word1, word2);
