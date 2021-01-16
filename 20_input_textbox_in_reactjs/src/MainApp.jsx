import React, { useState } from "react";

function MainApp() {
  var [userName, setUsername] = useState(
    ""
  ); /*will show the userName with hello! on the button click  */
  var [name, setName] = useState(
    ""
  ); /* will get the user Name written on input field with the help of onChange event of input field */

  //will trake the changes mde on input filed and will get the data written on input field
  function changeValue(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  //will set the userName aside the Hello!
  function setUsernameOnTop() {
    setUsername(name);
  }
  return (
    <div className="formCont">
      <h2 className="helloName">Hello ! {userName}</h2>
      <h2 className="name">{name}</h2>
      <input
        id="txtField"
        type="text"
        onChange={changeValue}
        /* defaultValue="" */
        value={name}
      />
      {/* if you write both defaulVal and Val react will throw an error saying
      MainApp contains an input of type text with both value and defaultValue props. */}
      {/* use defultValue="" || value={name} <- this one is good */}
      {/*  if value="" then react will throw aan error and will make your field readonly
       so to avoid that u have to write defaultValue || use onChane event on input filed 
       */}
      <input
        id="button"
        type="button"
        value="Submit "
        onClick={setUsernameOnTop}
      />
    </div>
  );
}

export default MainApp;
