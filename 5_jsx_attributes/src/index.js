import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const randomImg = "https://picsum.photos/200/300";

ReactDOM.render(
  <>
    <h1>JSX ATTRIBUTES</h1>
    <ul>
      <li>Use to write attributes of a  JSX element -{'>'} like attribes of  html element  </li>
      <li title=" this item is editable" contentEditable="true" > use camelCase to write attributes in JSX
        <ul>
          <li>
            Example :  JSX paragraph attribute contentEditable {'<'}- camelcase -{'>'} whle in html contenteditable {'<'}- normal -{'>'}
          </li>
        </ul>
      </li>
      <br />
      <li>
        <a href="https://picsum.photos/" target="_self">
          <img src={randomImg} alt="random img" />{/*use proper element attributes to get rid of react warnings */}
        </a>
      </li>
    </ul>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
