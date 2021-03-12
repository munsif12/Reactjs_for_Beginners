import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftLogo">
        <h1>Munsif Ali Misri</h1>
      </div>
      <div className="rightNavElements">
        <ul>
          <li className="list1">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              exact
              to="/"
              activeClassName="activeClass"
              className="aTag"
            >
              Home
            </NavLink>
          </li>
          <li className="list2">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              exact
              to="/services"
              activeClassName="activeClass"
              className="aTag"
            >
              Projects
            </NavLink>
          </li>
          <li className="list3">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              exact
              to="/about"
              activeClassName="activeClass"
              className="aTag"
            >
              About
            </NavLink>
          </li>
          <li className="list4">
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              exact
              to="/contect"
              activeClassName="activeClass"
              className="aTag"
            >
              Contect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
