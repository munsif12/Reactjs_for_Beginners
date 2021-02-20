import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import User from "./User";
function MainPage() {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="topicDetails">
        <h3>UseParams in Reactjs</h3>
        <ul>
          <li>
            useParams returns an object of key/value pairs of URL parameters.
            Use it to access match.
          </li>
          <li>useparams are use get value of the url of the dynamic contect</li>
          <li>like i created a page user/etcUserName change the url to see</li>
          <li>
            Example:
            <ul>
              <li>
                {"<Route exact "}
                <span>path="/user"</span>{" "}
                {'component={() => <User pageName="User" />} /> '}
              </li>
              <li>
                {"<Route exact "}
                <span>path="/user/:userName"</span>{" "}
                {'component={() => <User pageName="User" />} /> '}
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
          <Route
            exact
            path="/user"
            component={() => <User pageName="User" />}
          />
          <Route
            exact
            path="/user/:userName"
            component={() => <User pageName="User" />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
