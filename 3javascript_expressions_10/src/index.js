
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

var userName = prompt("insert your name ");
var lastName = "khan";
ReactDOM.render(
  <>
    <h1>Javascript Fragment</h1>
    <h5>Use to write Javascript within JSX</h5>
    { <h2>Welcome {userName} to Reactjs </h2> /* curly brackets use to write javascript fragment */}
    <ol>
      <li>{` Your Complete name is ${userName}_${lastName}`}</li>{/*using templete literals */}
      <li>the sum of 2+2 = {2 + 2}</li>
      <li>
        we can write JF using {'{'} YourVariableName  {'}'} curlybrackets
      </li>
      <li>you can only write Expressions inside JSfragment not a Statment like (if (1==1){'{'} etc {'}'} else etc
       </li>
    </ol>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Must to know

// <----- 1 -----> 

// you can onnlu write expression in javascript fragment  not a statment
// expressions are: - 2 + 3
// Steatment  is: - if (1 == 1) {
//   console.log(true);
// } else {
//   console.log(false)
// }

// <----- 2 -----> 

// You can also use templete litrals inside a JSfragment
// {`my name is ${name} and last name is ${lastName}`}