import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [Display, setDisplay] = useState(false);
  function toggleNavbar() {
    const toggleBtn = document.getElementById("hamburger");
    toggleBtn.addEventListener("click", () => {
      if (!Display) { /* if hamburger opens  */
        document.getElementById("hamburger").style.cssText = "transform:rotate(-45deg);";
        document.getElementById("h_bar1").style.cssText = "transform:rotate(-90deg);width:15px;";
        document.getElementById("h_bar3").style.cssText = "transform:rotate(-90deg);width:15px;";
        document.getElementById("rightNavElements").style.display = "block";
        setDisplay(true);
      }
      else {  /* if hamburger closes  */
        document.getElementById("hamburger").style.cssText = "transform:rotate(0deg);";
        document.getElementById("h_bar1").style.cssText = "transform:rotate(0deg);width:15px;";
        document.getElementById("h_bar2").style.display = "block";
        document.getElementById("h_bar3").style.cssText = "transform:rotate(0deg);width:15px;";
        document.getElementById("rightNavElements").style.display = "none";
        setDisplay(false);
      }

    })
  }
  return (
    <div className="navbar">
      <div className="leftLogo">
        <h1>Munsif Ali Misri</h1>
      </div>
      <NavLink to="#" className="toggleButton" onClick={toggleNavbar} id="hamburger">
        <div className="line1" id="h_bar1"></div>
        <div className="line2" id="h_bar2"></div>
        <div className="line3" id="h_bar3"></div>
      </NavLink>
      <div className="rightNavElements" id="rightNavElements">
        <ul>
          <li className="list1" >
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
          <li className="list2" >
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              exact
              to="/services"
              activeClassName="activeClass"
              className="aTag"
            >
              Services
            </NavLink>
          </li>
          <li className="list3" >
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
              to="/team"
              activeClassName="activeClass"
              className="aTag"
            >
              Team
            </NavLink>
          </li>
          <li className="list5">
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
