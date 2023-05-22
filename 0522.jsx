// useEffectを使って、stateの値が変更されたときに特定の処理を実行するプログラムを作成してください。
// import React, { useState, useEffect } from 'react';

// function ValueChange() {
//   const [value, setValue] = useState('');

//   useEffect(() => {
//     console.log('値が変更されました:', value);
//   }, [value]);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//     </div>
//   );
// }

// export default ValueChange;

// useStateを使って、ボタンのクリック回数をカウントし、クリックした回数を表示するプログラムを作成してください。

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>クリック回数: {count}</p>
//       <button onClick={handleClick}>クリック</button>
//     </div>
//   );
// }

// export default Counter;
