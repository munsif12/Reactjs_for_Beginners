import React from 'react'; //contains babel and webpack for us
import ReactDOM from 'react-dom';
ReactDOM.render(
  <h1> Hello World! My first app </h1>,//this is not html this is called JSX 
  // React.createElement('h1', null, 'Hello World'), //another way to write the above jsx code if you dont want to import react 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// <----- print hello world with pure javascript ---->
// var h1 = document.createElement("h1");
// h1.innerHTML = "MUNSIF ALI MISRI";
// document.getElementById("root").appendChild(h1);