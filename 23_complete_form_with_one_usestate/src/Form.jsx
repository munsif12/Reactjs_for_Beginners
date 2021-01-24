import React from "react";

function Form(props) {
  var {
    fName: firstName,
    lName: lastName,
    email,
    phone: phoneNumber,
  } = props.details;
  return (
    <>
      <form action="" onSubmit={props.setUsernameOnTop}>
        <input
          id="txtField"
          type="text"
          onChange={props.changeValue}
          /* defaultValue="" */
          value={firstName}
          placeholder="Name"
          name="fName"
        />
        <br />
        <input
          id="txtField"
          type="text"
          onChange={props.changeValue}
          /* defaultValue="" */
          value={lastName}
          placeholder="Last Name"
          name="lName"
        />
        <input
          id="txtField"
          type="text"
          onChange={props.changeValue}
          /* defaultValue="" */
          value={email}
          placeholder="Email"
          name="email"
        />
        <input
          id="txtField"
          type="text"
          onChange={props.changeValue}
          /* defaultValue="" */
          value={phoneNumber}
          placeholder="Phone No."
          name="phone"
        />
        <input id="button" type="submit" value="Submit " />
      </form>
    </>
  );
}

export default Form;
