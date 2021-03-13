import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [Display, setDisplay] = useState(false);
  useEffect(() => {
    console.log("running Efffect")
    const currentDisplayProp = document.getElementById("rightNavElements").style.display;
    console.log(currentDisplayProp)
  });
  function toggleNavbar() {
    const toggleBtn = document.getElementById("hamburger");
    toggleBtn.addEventListener("click", () => {
      if (!Display) {
        console.log(Display)
        document.getElementById("rightNavElements").style.display = "block";
        setDisplay(true);
      }
      else {
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
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </NavLink>
      <div className="rightNavElements" id="rightNavElements">
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
