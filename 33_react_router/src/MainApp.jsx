import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contect from "./Contect";
import TopicDetils from "./TopicDetils";
function MainApp() {
  return (
    <div className="mainApp">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contect" component={Contect} />
      </Switch>
      <TopicDetils />
    </div>
  );
}

export default MainApp;
