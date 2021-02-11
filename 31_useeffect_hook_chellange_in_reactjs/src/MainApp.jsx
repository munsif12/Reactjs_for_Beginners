import React, { useState, useEffect } from "react";

function MainApp() {
  var [value, setValue] = useState();
  useEffect(() => {
    document.title = `You Clicked me ${value} times`;
  });
  return (
    <div className="mainApp">
      <h2>Changing title of page using UseEffect</h2>
      <button
        onClick={() => {
          setValue(value++);
        }}
      >
        Click me {value}
      </button>
    </div>
  );
}

export default MainApp;
