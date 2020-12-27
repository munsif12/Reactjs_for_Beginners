import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(//you can render multiple items by using a div and a array of elements
  <div>
    <h1>Rendering multiple items... </h1>
    <h4>There are 2 ways to do that
      <ul>
        <li>
          by using a div and wrap your elements inside a that div
        </li>
        <li>
          if your version is greater the 16.x.x then you can return an array [h,p,p] and wrap  elemtnts in side array with a comma seprating
        </li>
      </ul>
    </h4>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// returning with an arrray
// [
//   <h1>rendering multiple items </h1>,
//   <h4>There are 2 ways to do that
//     <ul>
//       <li>
//         by using a div and wrap your elements inside a that div
//       </li>,
//       <li>
//         if your version is greater the 16.x.x then you can return an array [h,p,p] and wrap  elemtnts in side array with a comma seprating
//       </li>,
//     </ul>,
//   </h4>
// ]