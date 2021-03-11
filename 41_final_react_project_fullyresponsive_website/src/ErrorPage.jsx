import React from "react";
import SvgErrorPage from "./SvgErrorPage";
import { useHistory } from "react-router-dom";
function ErrorPage() {
  const history = useHistory();
  return (
    <div className="errorPage">
      <h1>
        <SvgErrorPage />
      </h1>
      <button
        className="errorPageBtn"
        onClick={() => {
          history.push("/");
        }}
      >
        Home Page
      </button>
    </div>
  );
}

export default ErrorPage;
