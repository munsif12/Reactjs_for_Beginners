import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import userPagePicture from "./user-avatars-pack.jpg";
function User(props) {
  useEffect(() => {
    alert("Please Change he url to user/anyName");
  }, []);
  const arrayOfUsers = [
    "/user/munsif",
    "/user/hamza",
    "/user/kazmii",
    "/user/arslan",
  ];
  console.log(arrayOfUsers);
  const { userName } = useParams();
  const locaton = useLocation();
  var index = arrayOfUsers.map((val, index) => {
    if (locaton.pathname === val) {
      return index;
    } else return false;
  });
  console.log(index);
  return (
    <div className="userPage">
      <h1>This is {props.pathname} page</h1>
      {userName === null ? null : <h2>Welcome {userName}! </h2>}
      {arrayOfUsers.includes(locaton.pathname) ? (
        <div className="welcomeDetails">
          <h2>Hello {locaton.pathname}</h2>,
          <button onClick={() => alert("you are Premium user")}>
            Click me
          </button>
        </div>
      ) : null}
      <img src={userPagePicture} alt="" srcset="" />
    </div>
  );
}

export default User;
