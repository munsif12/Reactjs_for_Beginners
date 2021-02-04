import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import ErrorPage from "./ErrorPage";
function MainPage() {
  useEffect(() => {
    alert("Write anthing invalid on url to get the Error Page");
  }, []);
  return (
    <div className="mainPage">
      <Navbar />
      <div className="body">
        <Switch>
          <Route exact path="/" component={() => <Home pageName="Home" />} />
          <Route
            exact
            path="/about"
            component={() => <About pageName="About" />}
          />
          <Route
            exact
            path="/contect"
            render={() => <Contect pageName="Contect" />}
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
