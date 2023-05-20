// useStateを使って、ボタンのクリック回数をカウントし、
// クリックした回数を表示するプログラムを作成してください。

import React, { useState } from 'react';

function ClickCounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>クリックした回数: {count}</p>
      <button onClick={handleClick}>クリック</button>
    </div>
  );
}

export default ClickCounterButton;

// useStateを使って、inputに入力されたテキストをstateに保存し、
// 入力されたテキストを表示するプログラムを作成してください。

// import React, { useState } from 'react';

// function TextInputDisplay() {
//   const [inputText, setInputText] = useState('');

//   const handleChange = (event) => {
//     setInputText(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={inputText} onChange={handleChange} />
//       <p>入力されたテキスト: {inputText}</p>
//     </div>
//   );
// }

// export default TextInputDisplay;
