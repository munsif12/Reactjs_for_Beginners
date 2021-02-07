import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const currentDate = new Date().toLocaleDateString();/* to get date in valid format  */
const currentTime = new Date().toLocaleTimeString();/* to get Time in valid format  */
ReactDOM.render(
  <>
    <h1>Current Date and time </h1>
    <h3> CHELLANGE RESULT </h3>

    <p>{`The current Date is :- ${currentDate}`}</p>
    <p>{`The current Date is :- ${currentTime}`}</p>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
