import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav id="nav">
        <ul>
          <li>
            <NavLink exact activeClassName="activeClass" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeClass" to="/about">
              About
            </NavLink>
          </li>
          <li className="impNav">
            <NavLink exact activeClassName="activeClass" to="/user">
              User
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeClass" to="/contect">
              Contect
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
