import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
