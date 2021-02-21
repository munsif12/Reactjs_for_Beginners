import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import userPagePicture from "./user-avatars-pack.jpg";
function User(props) {
  useEffect(() => {
    alert(
      "Please Change the url to user/anyName or /munsif,hamza,kazmii to see magic"
    );
  }, []);
  const arrayOfUsers = [
    "/user/munsif",
    "/user/hamza",
    "/user/kazmii",
    "/user/arslan",
  ];
  const { userName } = useParams();
  const locaton = useLocation();
  console.log(userName);
  return (
    <div className="userPage">
      <h1>This is {props.pageName} page</h1>
      {userName === null || userName === undefined ? null : (
        <h2>Welcome {userName}! </h2>
      )}
      {arrayOfUsers.includes(locaton.pathname) ? (
        <div className="welcomeDetails">
          <h2>Hello {locaton.pathname}</h2>,
          <button onClick={() => alert("you are Premium user")}>
            Click me!
          </button>
        </div>
      ) : null}
      <img src={userPagePicture} alt="" srcset="" />
    </div>
  );
}

export default User;
