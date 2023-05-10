// 変数xに数値5を代入し、変数yに数値3を代入し、xとyの積をコンソールに出力するプログラムを作成してください。
const x = 5;
const y = 3;
console.log(x * y);

// 文字列「Everyday!」をコンソールに出力するプログラムを作成してください。
const word = 'Everyday!';
console.log(word);

// オブジェクトpersonがあり、そのプロパティとしてnameとageとbirthdayが定義されています。
// オブジェクトpersonのageプロパティの値を2倍にするプログラムを作成してください。
const person = { name: 'Hikari', age: 16, birthday: '2006-09-28' };
person.age = person.age * 2;
console.log(person);

// 変数numに数値を代入し、if文を使用して、numが0より大きい場合に「positive」という文字列を、
// numが0より小さい場合に「negative」という文字列をコンソールに出力するプログラムを作成してください。
const num = -1;
if (num > 0) {
  console.log('postitive');
} else {
  console.log('negative');
}

// 変数を宣言し、1から10までの整数値を代入し、その値が奇数か偶数かを判定して、
// 偶数ならば"偶数"、奇数ならば"奇数"とコンソールに出力するプログラムを書いてください。
// 【・】変数を宣言し損ねていた
const number = 6;
if (number % 2 === 0) {
  console.log('偶数');
} else {
  console.log('奇数');
}
