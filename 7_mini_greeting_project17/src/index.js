import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const currentHour = new Date().getHours();
const colorChange = {};
var greeting = "";
if (currentHour >= 1 && currentHour < 12) {
  greeting = "Good Morning";
}
else if (currentHour > 12 && currentHour <= 15) {
  greeting = "Good Afternoon";
  colorChange.color = " yellow"
}
else if (currentHour > 15 && currentHour < 21) {
  greeting = "Good Evening";
  colorChange.color = "lightgreen"
}
else {
  greeting = "Good Night";
  colorChange.color = "black"
}
ReactDOM.render(
  <>
    <div title="greets according to your time" className="greeting">
      <h1 >Hello Everyone,<div className="greet" style={colorChange}> {greeting}</div></h1>
    </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
