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
        <h3>UseLocation Hooks in Reactjs</h3>
        <ul>
          <li>useLocation. Returns the location to any component.</li>
          <li>
            The useLocation hook returns the location object that represents the
            current URL.
          </li>
          <li>
            like i used useLocation to show spacific data to specific people
          </li>
          <li>
            write /user/munsif,hamza,kazmii to show the specific data else other
            names will get normal data
          </li>
          <li>
            Example:
            <ul>
              <li>
                {"<Route exact "}
                <span>path="/user/:userName"</span>{" "}
                {'component={() => <User pageName="User" />} /> '}
              </li>
              <li>
                <span>
                  import{" { useParams, useLocation } "} from
                  "react-router-dom";
                </span>
              </li>
              <li>{<span> const locaton = useLocation();</span>}</li>
              <li>
                {"{arrayOfUsers.includes(locaton.pathname) ? ("} <br />
                {' <div className="welcomeDetails">'} <br />
                {" <h2>Hello {locaton.pathname}</h2>,"}
                {
                  ' <button onClick={() => alert("you are Premium user")}> Click me </button> '
                }
                {"</div>"} <br />
                {" ) : null}"}
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
          agr ham exact likhy ga to hamy 1 naya rote banana pary ga
          <Route
            path="/user/:userName"
            component={() => <User pageName="User" />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
