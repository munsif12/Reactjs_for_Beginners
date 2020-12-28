
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var userName = prompt("insert your name ");
ReactDOM.render(
  <>
    <h1>Javascript Fragment</h1>
    { <h2>Welcome {userName} to Reactjs </h2> /* curly brackets use to write javascript fragment */}
    <ol>
      <li>Use to write Javascript within JSX</li>
      <br></br>
      <li>
        we can write JF using {'{'} YourVariableName  {'}'} curlybrackets
      </li>
    </ol>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
