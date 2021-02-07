import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';

//creating context
var providerName = createContext();
var consumerName = createContext();

ReactDOM.render(
  <>
    {/* Context provider is MainApp */}
    <providerName.Provider value=" index.js ">
      {/* providing to which component */}
      <consumerName.Provider value=" Component_2">
        <MainApp />
      </consumerName.Provider>
    </providerName.Provider>
  </>,
  document.getElementById('root')
);
export { providerName, consumerName };
//now what if i want to send data to Component _2 joka mainapp ka ander component 1 k ander component 2 ma ha ..
/*
is case ma agr ham normal method use kry ga to hamy props use krna hoga or props MaipApp ko send krna hoga or phr
mainApp ka ander props component 1 ko send krna hoga or phir component1 k ander component 2 ko joka better opton nhih
HAM CHAhTY HA KA HAM APNA DATA DIRECTLY COMPONT 2 KO SEND KRDA BINDA DUSRY COMPONEtS KO pAss kEya huay props kA ZAREYA
to is kam ko solve krny k leya (CONTEXT API USE HOTE ) to send specific data directly  to the requied component
CONTEXT API has 3 parts:-
1- create Context
2- context provider
3- context consumer
*/