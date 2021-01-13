import React from "react";

function BtnGetCurrentTime(props) {
  return (
    <div className="BtnGetCurrentTime">
      <button onClick={props.getTime}>Get Current Time</button>
    </div>
  );
}

export default BtnGetCurrentTime;
