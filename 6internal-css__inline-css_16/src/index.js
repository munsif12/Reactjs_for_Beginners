import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const headingStyle = {
  color: "blue",
  textAlign: "center"
}
const title = {
  color: "blue",
  fontWeight: "bold",
  fontSize: "16px"
}
ReactDOM.render(
  <>
    <h1 style={headingStyle}>Inline CSS and Internal CSS</h1>
    <p>Objects are use for <em style={title}>Internal css styling </em> the Key for object is written in camelCase and value is written in doubleOrSingle quotes ' ' <ul>
      <li>const headingStyle = {'{'}<br />
      textAlign:'center',<br />
      color:'red'<br />
        {'}'}</li>
      <li> {'<h1>'} style={'{'} headingStyle {'}>'} etc inside {'</h1>'} {'//'} <em style={{ color: 'green' }}>calling the object which contains the styling of heading </em> </li>
    </ul>
    </p>
    <p>Objects are use for <em style={title}>Inline css styling </em> the Key for object is written in camelCase and value is written in doubleOrSingle quotes just like internal css <ul>
      <li>Just use curly brackets indie style brackets </li>
      <li> {'<h1'} style={'{'} {'{'} textAlign:'center', color:'red' {'} }>'} etc inside {'</h1>'}  </li>
    </ul>
    </p>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
