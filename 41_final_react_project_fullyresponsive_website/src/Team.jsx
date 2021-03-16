import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
function Team({ empName, jobTitle, university, empImage }) {
  return (
    <div class="card">
      <div className="imgCont" back>
        <img src={empImage} alt="John" />
      </div>
      <div className="empDetails">
        <div className="empName">
          <h1>{empName}</h1>
        </div>
        <div className="jobTitle">
          <p class="title">{jobTitle}</p>
        </div>
        <div className="university">
          <p>{university}</p>
        </div>
      </div>
      <div className="empSocialLinks">
        <NavLink to="#">
          <FacebookIcon />
        </NavLink>
        <NavLink to="#">
          <LinkedInIcon />
        </NavLink>
        <NavLink to="#">
          <GitHubIcon />
        </NavLink>
      </div>
      <div className="btnDiv">
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Team;
