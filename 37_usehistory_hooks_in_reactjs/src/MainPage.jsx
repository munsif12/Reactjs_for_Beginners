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
        <h3>useHistory Hooks in Reactjs</h3>
        <ul>
          <li>
            The useHistory hook gives you access to the history instance that
            you may use to navigate
          </li>
          <li>
            mtlab ys ka ispa apka record hota ha ka ap kaha/kis page sa aiy ho
          </li>
          <li>
            it has multiple methods which are
            <ol>
              <li>go()</li>
              <li>goBack()</li>
              <li>goForward()</li>
              <li>push("/pathname")</li>
              <li>replace()</li>
              <li>location.pathname</li>
            </ol>
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
                  import{" {{ useParams, useLocation, useHistory } "} from
                  "react-router-dom";
                </span>
              </li>
              <li>{<span> const history = useHistory();</span>}</li>
              <li>
                {'<button className="gobackButton" '}{" "}
                <span> {"onClick={() => history.goBack()}"} </span>{" "}
                {"> Go Back </button>"}
              </li>
              <li>
                {'<button className="magicButton" '}{" "}
                <span> {'onClick={() => history.push("/user/munsif")}'} </span>
                {"> Magic Btn </button>"}
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
          {/* agr ham exact likhy ga to hamy 1 naya rote banana pary ga */}
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
