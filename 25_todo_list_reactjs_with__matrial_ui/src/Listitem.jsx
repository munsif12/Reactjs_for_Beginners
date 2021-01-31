import React, { useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
function Listitem(props) {
  var [cutLine, setCutLine] = useState(false);
  function cutLineFunction() {
    cutLine ? setCutLine(false) : setCutLine(true);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
      }}
    >
      <span
        style={{
          height: "33px",
          textAlign: "center",
          outline: "none",
          color: "red",
          padding: "2px",
          margin: "0px 10px 0px 0px",
        }}
      >
        <HighlightOffIcon
          //   onClick={function () { //this fun is use to delete the entry
          //     props.delete(props.id);
          //   }}
          //   onKeyDown={(e) => { //working on key press
          //     props.delete(e);
          //   }}
          onClick={cutLineFunction} //linethrough to show the deletion
        />
      </span>
      <li
        style={{
          textDecoration: cutLine ? "line-through" : "none",
          listStyleType: "none",
        }}
      >
        {props.id + 1} : {props.value}
      </li>
    </div>
  );
}

export default Listitem;
