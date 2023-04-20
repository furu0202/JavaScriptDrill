// 変数を宣言し、数値を代入して、その値を2倍にしてコンソールに出力するプログラムを書いてください。
// 【・】正解
// let num = 5;
// let doubledNum = num * 2;
// console.log(doubledNum);

const number = 6;
const getNumber = number * 2;
console.log(getNumber);

// 条件分岐を使って、変数の値が正の数、負の数、0の場合で、コンソールにメッセージを出力するプログラムを書いてください。
// 【・】if文、不等号の使い方がわからない
// if(num > 0){
//     console.log("numは正の数です");
//   } else if(num === 0){
//     console.log("numは0です");
//   } else {
//     console.log("numは負の数です");
//   }
const num = 7;
if (num > 0) {
  console.log('numは正の数');
} else if (num === 0) {
  console.log('numは0');
} else if (num < 0);
{
  console.log('numは負の数');
}

// 配列を使って、10個の文字列を格納し、forループを使って、
// 配列の全ての要素を逆順でコンソールに出力するプログラムを書いてください。
// 【・】forループ、length、[i] 使い方が難しい
// const arr = [
//   'apple',
//   'banana',
//   'cherry',
//   'orange',
//   'kiwi',
//   'grape',
//   'lemon',
//   'mango',
//   'peach',
//   'pineapple',
// ];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

const words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
for (let i = words.length - 1; i >= 0; i--) {
  console.log(words[i]);
}

// 関数を使って、3つの引数を受け取り、その3つの引数を文字列として結合して返すプログラムを書いてください。
// 【・】戻り値を用いたconsole.log方法 (過去問参考)
// function concatenateStrings(str1, str2, str3) {
//     return str1 + str2 + str3;
//   }
//   console.log(concatenateStrings("Hello", ", ", "world!"));
function threeComments(word1, word2, word3) {
  return word1 + word2 + word3;
}
console.log(threeComments('今日は', '4月20日', '木曜日'));

// whileループを使って、1から20までの数字で、3の倍数の場合は"Fizz"、
// 5の倍数の場合は"Buzz"、3と5の倍数の場合は"FizzBuzz"、それ以外の場合は数字をコンソールに出力するプログラムを書いてください。
// 【・】whileループの使い方、解き方が全く分からない。。。
// while (i <= 20) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }
