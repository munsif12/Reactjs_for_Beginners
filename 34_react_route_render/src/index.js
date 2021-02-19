import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from "./MainPage"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);