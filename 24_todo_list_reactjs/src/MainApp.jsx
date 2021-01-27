import React from "react";
import AddItem from "./AddItem";
function MainApp() {
  return (
    <div className="mainDiv">
      <div className="header">TODO LIST</div>
      <AddItem />
    </div>
  );
}

export default MainApp;
