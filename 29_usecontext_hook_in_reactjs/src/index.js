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
