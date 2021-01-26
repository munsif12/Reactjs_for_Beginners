import React from "react";
import AddItem from "./AddItem";
import PresentItems from "./PresentItems";
function MainApp() {
  return (
    <div className="mainDiv">
      <div className="header"></div>
      <AddItem />
      <PresentItems />
    </div>
  );
}

export default MainApp;
