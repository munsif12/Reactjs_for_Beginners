import React from "react";

function Increment(props) {
  return (
    <div className="increment">
      <button
        style={{ color: "green", fontSize: "22px" }}
        className="common increBtn"
        id="increBtn"
        onClick={props.incBtn}
      >
        INC
      </button>
    </div>
  );
}
export default Increment;
