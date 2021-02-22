import React from "react";
import { useHistory } from "react-router-dom";
function Goback_button() {
  const history = useHistory();
  return (
    <>
      <button className="gobackButton" onClick={() => history.goBack()}>
        Go Back
      </button>
    </>
  );
}

export default Goback_button;
