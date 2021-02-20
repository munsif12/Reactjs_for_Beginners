import React from "react";
import AboutPicture from "./About.jpg";
function About(props) {
  return (
    <div className="aboutPage">
      <h1>This is {props.pageName} page</h1>
      <img src={AboutPicture} alt="" srcset="" />
    </div>
  );
}

export default About;
