// useStateを使って、ボタンをクリックした回数をカウントするプログラムを作成してください。

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>ボタンをクリックした回数: {count}</p>
//       <button onClick={handleClick}>クリック</button>
//     </div>
//   );
// }

// export default Counter;

// useStateを使って、inputに入力された文字列をstateに保存し、ボタンをクリックしたらアラートに表示するプログラムを作成してください。

// import React, { useState } from 'react';

// function InputAlert() {
//   const [inputText, setInputText] = useState('');

//   const handleChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleClick = () => {
//     alert(inputText);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleChange} />
//       <button onClick={handleClick}>表示</button>
//     </div>
//   );
// }

// export default InputAlert;

// useEffectを使って、画面幅が変更されたときにstateに現在の画面幅を保存し、画面幅が変更されたときに実行する処理を実装するプログラムを作成してください。
// import React, { useState, useEffect } from 'react';

// function WindowWidth() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <p>画面幅: {windowWidth}px</p>
//     </div>
//   );
// }

// export default WindowWidth;
