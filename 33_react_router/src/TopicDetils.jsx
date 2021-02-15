import React from "react";

function TopicDetils() {
  return (
    <div className="TopicDetails">
      <h3>REACT-ROUTER-DOM DETAILS</h3>
      <ul>
        <li>
          <p>
            Basically React-router is use to render pages on the client side
            what we were before was rendering pages on server side{" "}
          </p>
        </li>
        <li>
          <p>
            React. js is an open-source JavaScript library that is used for
            building user interfaces specifically for single-page applications.
            ... React allows developers to create large web applications that
            can change data, without reloading the page. The main purpose of
            React is to be fast, scalable, and simple.
          </p>
        </li>
        <li>
          <h6>Example:</h6>
          <ul>
            <li>
              <p>
                import {" { BrowserRouter, Route, Link }"} from
                "react-router-dom";
                <ul>
                  <li>
                    <p>
                      BrowserRouter :- jisn compontents ke ham na render krwana
                      ho unko BrowserRouter ka ander likhty ha like hamy pure
                      website route krwani haa to pure mainApp iska ander likhy
                      ga
                      <ul>
                        <li>
                          {" <BrowserRouter> "}
                          {"<MainApp />"}
                          {" </BrowserRouter>"}
                        </li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p></p>
        </li>
      </ul>
    </div>
  );
}

export default TopicDetils;
