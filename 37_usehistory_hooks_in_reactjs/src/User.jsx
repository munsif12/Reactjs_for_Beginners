import React, { useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import userPagePicture from "./user-avatars-pack.jpg";
function User(props) {
  useEffect(() => {
    alert(
      "Please Change the url to user/anyName or /munsif,hamza,kazmii to see magic OR click The magic button down below"
    );
  }, []);
  const arrayOfUsers = [
    "/user/munsif",
    "/user/hamza",
    "/user/kazmii",
    "/user/arslan",
    "/user/abcd",
  ];
  const { userName } = useParams();
  const locaton = useLocation();
  const history = useHistory();
  console.log(history);
  return (
    <div className="userPage">
      <h1>This is {props.pageName} page</h1>
      {/* using useHistory */}
      {/* i have created a goback button component but not using rn  */}
      {/* you can also create a goBack button component and use on every page */}
      <button className="gobackButton" onClick={() => history.goBack()}>
        Go Back
      </button>
      <button
        className="magicButton"
        onClick={() => history.push("/user/munsif")}
      >
        Magic Btn
      </button>
      {/* using useParams to get the dynamic data from url in my case dynamic data is userName */}
      {userName === null || userName === undefined ? null : (
        <h2>Welcome {userName}! </h2>
      )}
      {/* using useLocation to get the current url and to show specific data to
      specific user like premium user */}
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
