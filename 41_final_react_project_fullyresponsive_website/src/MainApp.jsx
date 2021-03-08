import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Page from "./Page";
function MainApp() {
  return (
    <div className="mainApp">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Page pageName="Home" />;
          }}
        />
        <Route
          exact
          path="/about"
          component={() => {
            return <Page pageName="About" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default MainApp;
