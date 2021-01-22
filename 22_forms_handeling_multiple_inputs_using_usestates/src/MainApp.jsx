import React, { useState } from "react";

function MainApp() {
  /* USESTAES */
  /* we can also pass objcts inside use state */
  var [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  //we are using onling one changeValue mthod to handle the changes made inside the textBox
  // before this method we were using changeValue method for ver textBox
  //becz of this we also get rid of decalring multiple useStates for each field name
  function changeValue(e) {
    var fieldName = e.target.name;
    var fieldVal = e.target.value;
    setFullName((prevVal) => {
      if (fieldName === "fname") {
        return {
          fName: fieldVal,
          lName: prevVal.lName,
        };
      } else if (fieldName === "lname") {
        return {
          fName: prevVal.fName,
          lName: fieldVal,
        };
      }
    });
  }
  function setUsernameOnTop() {}
  return (
    <div className="formCont">
      <h6>
        Check the code to better understand the difference between 20,21 and 22
        lecture . Code's available inside Reactjs Repo
      </h6>
      <h2 className="helloName">
        Hello ! {fullName.fName} {fullName.lName}
      </h2>
      <form action="" onSubmit={setUsernameOnTop}>
        <input
          id="txtField"
          type="text"
          onChange={changeValue}
          /* defaultValue="" */
          value={fullName.fName}
          placeholder="Name"
          name="fname"
        />
        <br />
        <input
          id="txtField"
          type="text"
          onChange={changeValue}
          /* defaultValue="" */
          value={fullName.lName}
          placeholder="Last Name"
          name="lname"
        />
        <input id="button" type="submit" value="Submit " />
      </form>
    </div>
  );
}

export default MainApp;
