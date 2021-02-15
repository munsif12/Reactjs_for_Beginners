import React from "react";

function TopicDetils() {
  return (
    <div className="TopicDetails">
      <h3>REACT-ROUTER-DOM DETAILS</h3>
      <ul>
        <li>
          Basically React-router is use to render pages on the client side what
          we were before was rendering pages on server side.
        </li>
        <li>
          React. js is an open-source JavaScript library that is used for
          building user interfaces specifically for single-page applications.
          ... React allows developers to create large web applications that can
          change data, without reloading the page. The main purpose of React is
          to be fast, scalable, and simple.
        </li>
        <li>
          <p className="heading">Example:</p>
          <ul>
            <li>
              import {" { BrowserRouter, Route, Link }"} from
              "react-router-dom";
              <ol>
                <li>
                  <p>
                    <span className="routerComponents">BrowserRouter</span> :-
                    jisn compontents ke ham na render krwana ho unko
                    BrowserRouter ka ander likhty ha like hamy pure website
                    route krwani haa to pure mainApp iska ander likhy ga
                    <ul>
                      <li>
                        {" <BrowserRouter> "} <br />
                        {"<MainApp />"} <br />
                        {" </BrowserRouter>"}
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="routerComponents">Swith:- </span> iska use
                    ham given path ke traf lajany ka leya krty h iska ander
                    jitny mazee paths bana sakty ho ap{" "}
                  </p>
                  <p>
                    It just means that whenever a route's path matches the url
                    path, the router will render the route's component.
                    <ul>
                      <li>
                        {"<Switch>"} <br />
                        {"<Route exact path='/' component={Home} /> "} <br />
                        {'<Route path="/Contect" component={Contect} />'}
                        <br />
                        {"</Switch>"}
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <span className="routerComponents">Path:- </span> is
                    component ka use ka ap konsa path bana chahty ha is
                    component ke 3 propertires hote h
                    <ul>
                      <li>Exect</li>
                      <li>Path="/"</li>
                      <li>Component={"{Ceomponentname}"}</li>
                    </ul>
                  </p>
                </li>
              </ol>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default TopicDetils;
