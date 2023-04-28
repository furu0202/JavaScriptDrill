// 変数を宣言し、任意の文字列を代入し、その文字列を逆順にしてコンソールに出力するプログラムを書いてください。
const food = 'potato';
console.log(food);

// 変数を宣言し、任意の文字列を代入し、その文字列の長さをコンソールに出力するプログラムを書いてください。
const str = 'lucky';
console.log(str.length);

// forループを使って、1から100までの数字で、7の倍数の場合は"lucky"、13の倍数の場合は"unlucky"、
// 7と13の倍数の場合は"lucky unlucky"、それ以外の場合は数字をコンソールに出力するプログラムを書いてください。

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log('lucky');
  } else if (i % 13 === 0) {
    console.log('unlucky');
  } else if ((i % 7 === 0) & (i % 13 === 0)) {
    console.log('lucky unlucky');
  } else {
    console.log(i);
  }
}
