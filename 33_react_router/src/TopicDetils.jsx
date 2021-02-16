import React from "react";

function TopicDetils() {
  return (
    <div className="TopicDetails">
      <h3>REACT-ROUTER-DOM DETAILS</h3>
      <div className="details">
        <div className="topicDetail">
          <ul>
            <li>
              1:- Basically React-router is use to render pages on the client
              side what we were before was rendering pages on server side.
            </li>
            <li>
              2:- React. js is an open-source JavaScript library that is used
              for building user interfaces specifically for single-page
              applications. ... React allows developers to create large web
              applications that can change data, without reloading the page. The
              main purpose of React is to be fast, scalable, and simple.
            </li>
          </ul>
        </div>
        <div className="topicExample">
          <ul>
            <li>
              <p className="heading">Example:</p>
              <ul>
                <li>
                  import {" { BrowserRouter, Route, Link }"} from
                  "react-router-dom";
                  <ol>
                    <li>
                      <p>
                        <span className="routerComponents">BrowserRouter</span>{" "}
                        :- jisn compontents ke ham na render krwana ho unko
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
                        <span className="routerComponents">Swith:- </span> iska
                        use ham given path ke traf lajany ka leya krty h iska
                        ander jitny mazee paths bana sakty ho ap{" "}
                      </p>
                      <p>
                        It just means that whenever a route's path matches the
                        url path, the router will render the route's component.
                        <ul>
                          <li>
                            {"<Switch>"} <br />
                            {"<Route exact path='/' component={Home} /> "}{" "}
                            <br />
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
                        <ul
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <li>
                            Exect **//Switch will exectly choose the path
                            matching
                          </li>
                          <li>
                            Path="/" **//give path or create path to your page{" "}
                          </li>
                          <li>
                            Component={"{Ceomponentname}"}{" "}
                            {
                              "       **//which component you want to render for the given path"
                            }
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="routerComponents">NavLink:- </span>
                        instead of using anchor (a) to visit other page now in
                        React router you have to use{" <Navlink />"} to enable
                        client side rendering instead od server side
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            listStyleType: "circle",
                          }}
                        >
                          <li style={{ listStyleType: "circle" }}>
                            {'import { NavLink } from "react-router-dom";'}
                          </li>
                          <li
                            id="navlink_elements"
                            style={{ listStyleType: "circle" }}
                          >
                            {
                              '<NavLink exact activeClassName="activeClass" to="/">'
                            }
                            Home
                            {" </NavLink>"}
                            <ul>
                              <li>
                                <span className="routerComponents">
                                  exact:-
                                </span>
                                exact is use to match the exact path agr ya nhi
                                liko ga to path k / switch ko job pahla matching
                                element mily ga path ma woh page show krda
                              </li>
                              <li>
                                <span className="routerComponents">to:-</span>{" "}
                                to is use ka kis page pa jana ha apko like
                                href="/etc" in anchor tage
                              </li>
                              <li>
                                <span className="routerComponents">
                                  activeClassName:-
                                </span>
                                jonsa nav ka page ative ka usko class add krka
                                uske styling jasa many uper key h ka jab b kisi
                                page p move hoota h to nav ka neachy underine
                                hojata h
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </p>
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopicDetils;
