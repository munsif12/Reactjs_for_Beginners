import React from "react";
import { useHistory } from "react-router-dom";
function ErrorPage() {
  const history = useHistory();
  return (
    <div className="errorPage">
      <h2 className="errorTitle">ERROR 404</h2>
      <p className="errorDetail">Page not found.</p>
      <button onClick={() => history.push("/")}>GO HOME</button>
    </div>
  );
}

export default ErrorPage;
