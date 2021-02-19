import React from "react";
import HomePagePicture from "./Homepage.jpg";
function Home(props) {
  return (
    <div className="homePage">
      <h1>This is {props.pageName} page</h1>
      <img src={HomePagePicture} alt="" srcset="" />
    </div>
  );
}

export default Home;
