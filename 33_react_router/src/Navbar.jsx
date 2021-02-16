import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="right">
        <ul id="NavLinkId">
          <li>
            <a href="/">Home</a>
            <a href="/Contect">Contect</a>
          </li>
        </ul>
      </div>
      <div className="causeLeft_right">
        <p>
          Both NavLink will take you to same page diffence is left Nav will not
          refresh the page but right one will this is called
          client-side-rendering
        </p>
      </div>
      <div className="left">
        <ul>
          <li>
            <NavLink exact activeClassName="activeClass" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeClass " to="/Contect">
              Contect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
