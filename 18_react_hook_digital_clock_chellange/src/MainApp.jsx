import React, { useState } from "react";

function MainApp() {
  var [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  setTimeout(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <h1>Digital Clock</h1>
      <h2>{currentTime}</h2>
    </>
  );
}

export default MainApp;
