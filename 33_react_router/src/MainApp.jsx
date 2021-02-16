import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contect from "./Contect";
import TopicDetils from "./TopicDetils";
import Navbar from "./Navbar";
function MainApp() {
  useEffect(() => {
    alert("change the url to /Contect to see changes");
  }, []);
  return (
    <div className="mainApp">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contect" component={Contect} />
      </Switch>
      <TopicDetils />
    </div>
  );
}

export default MainApp;
