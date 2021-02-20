import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import userPagePicture from "./user-avatars-pack.jpg";
import singleuserPicture from "./singleuser.jpg";
function User(props) {
  useEffect(() => {
    alert("Please Change he url to user/anyName");
  }, []);
  const { userName } = useParams();
  return (
    <div className="userPage">
      <h1>This is {props.pageName} page</h1>
      {userName === null ? <h2>noUser</h2> : <h2>Welcome {userName}! </h2>}
      <img src={userPagePicture} alt="" srcset="" />
    </div>
  );
}

export default User;
