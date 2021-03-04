import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
// import ErrorPage from "./ErrorPage";
function MainPage() {
  useEffect(() => {
    alert(
      " instead of showing errorPage u can also return user to homepage if he writes invalid pageName on url"
    );
    alert("write invalid pageName on url");
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
          {/* <Route component={ErrorPage} /> */}{" "}
          {/* instead of showing errorPage u can also return user to homepage if he writes invalid pageName on url */}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
