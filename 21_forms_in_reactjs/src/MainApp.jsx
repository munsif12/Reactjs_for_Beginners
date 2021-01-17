import React, { useState } from "react";

function MainApp() {
  /* USESTAES */

  var [userName, setUsername] = useState(
    ""
  ); /*will show the userName with hello! on the button click  */
  var [name, setName] = useState(
    ""
  ); /* will get the user Name written on input field with the help of onChange event of input field */
  var [lastName, setLastName] = useState(
    ""
  ); /*will get the LastName written on input field*/
  var [toplastName, setTopLastName] = useState(
    ""
  ); /*will show the LastName with hello!AndFirdtName on the button click  */

  /* USESTAES */

  //will trake the changes mde on input filed and will get the data written on input field
  function changeValueName(event) {
    console.log(`First Name: ${event.target.value}`);
    setName(event.target.value);
  }

  //will set the userName aside the Hello!
  function setUsernameOnTop(e) {
    e.preventDefault();
    setUsername(name);
    setTopLastName(lastName);
  }
  function changeValueLastname(e) {
    console.log(`Last Name: ${e.target.value}`);
    setLastName(e.target.value);
  }

  return (
    <div className="formCont">
      <h2 className="helloName">
        Hello !{userName} {toplastName}
      </h2>
      <h2 className="name">
        {name} {lastName}
      </h2>
      <form action="" onSubmit={setUsernameOnTop}>
        <input
          id="txtField"
          type="text"
          onChange={changeValueName}
          /* defaultValue="" */
          value={name}
          placeholder="Name"
        />
        <br />
        <input
          id="txtField"
          type="text"
          onChange={changeValueLastname}
          /* defaultValue="" */
          value={lastName}
          placeholder="Last Name"
        />
        {/* if you write both defaulVal and Val react will throw an error saying
         MainApp contains an input of type text with both value and defaultValue props. */}
        {/* use defultValue="" || value={name} <- this one is good */}
        {/*  if value="" then react will throw aan error and will make your field readonly
         so to avoid that u have to write defaultValue || use onChane event on input filed 
       */}
        <input id="button" type="submit" value="Submit " />
      </form>
    </div>
  );
}

export default MainApp;
