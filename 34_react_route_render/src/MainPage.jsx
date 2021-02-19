import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
function MainPage() {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="topicDetails">
        <h3>Difference between React Route Component Vs render </h3>
        <ul>
          <li>
            there isnt any big difference between Component and Render method
          </li>
          <li>
            Component :- reloads the whole given component again when we click
          </li>
          <li>
            Render :- render checks if there is any update in the component if
            not it wont reload the component like Component method
          </li>
          <li>
            Render: it is helpFull when you want to send props inside the
            component
          </li>
          <li>
            Example:
            <ol>
              <li>
                {'<Route exact path="/"  />'}
                <span> {'component={() => <Home pageName="Home" />}'} </span>
              </li>
              <li>
                {'<Route exact path="/about"  />'}
                <span> {'component={() => <About pageName="About" />}'} </span>
              </li>
              <li>
                {'<Route exact path="/contect" />'}
                <span>{'render={() => <Contect pageName="Contect" />}'}</span>
              </li>
            </ol>
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
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
