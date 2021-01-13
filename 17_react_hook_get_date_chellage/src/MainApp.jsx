import React, { useState } from "react";
import BtnGetCurrentTime from "./BtnGetCurrentTime";
function MainApp() {
  var [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  //onclick functon to change the sttate of h2 which is holding the time
  const getCurrTime = () => {
    //alert("i am working"); Testing
    return setCurrentTime(new Date().toLocaleTimeString()); //setState is a function
  };

  return (
    <>
      <h1>GET CURRENT TIME</h1>
      <h2>{currentTime}</h2>
      <BtnGetCurrentTime getTime={getCurrTime} />
    </>
  );
}

export default MainApp;
