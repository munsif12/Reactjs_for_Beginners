import React from "react";
import ContectPicture from "./contect.png";
function Contect(props) {
  return (
    <div className="contectPage">
      <h1>This is {props.pageName} page</h1>
      <img src={ContectPicture} alt="" srcset="" />
    </div>
  );
}

export default Contect;
