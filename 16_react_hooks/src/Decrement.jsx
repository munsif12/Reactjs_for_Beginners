import React from "react";

function Decrement(props) {
  return (
    <div className="decrement">
      <button
        style={{ color: "red", fontSize: "22px" }}
        className="common decreBtn"
        id="decreBtn"
        onClick={props.decBtn}
      >
        DEC
      </button>
    </div>
  );
}

export default Decrement;
