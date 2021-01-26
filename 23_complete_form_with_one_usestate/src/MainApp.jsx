import React, { useState } from "react";
import Form from "./Form";
import SideDetails from "./SideDetails";
function MainApp() {
  /* USESTAES */
  /* we can also pass objcts inside use state
   and bcoz of that we get rid of usng multiple useStates for very txtField */
  var [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  //used object destructuring to get rid of .operator
  var {
    fName: firstName,
    lName: lastName,
    email,
    phone: phoneNumber,
  } = details;
  //used object destructuring to get rid of .operator
  var [topDetails, setTopDetails] = useState(details);
  //we are using onling one changeValue mthod to handle the changes made inside the textBox
  // before this method we were using changeValue method for ver textBox
  //becz of this we also get rid of decalring multiple useStates for each field name
  function changeValue(e) {
    var fieldName = e.target.name;
    var fieldVal = e.target.value;
    setDetails((prevVal) => {
      // used object destriucturing to get rid of if else
      return {
        ...prevVal,
        /*
        fName: "";
        lName: "";
        email: "";
        phone: ""; 
       */
        [fieldName]: fieldVal,
        /*for example fieldName=fname and fielsVal=muns
        [fname]:muns
        now fname is replaced with the new value and other props will remain same
        
        fName: "muns";
        lName: "";
        email: "";
        phone: "";

        this is the banifit of spread operator
        */
      };

      // *** new becoz of spread opertor this whole if else statemt are nont n use ***      //   if (fieldName === "fname") {
      //     return {
      //       fName: fieldVal,
      //       lName: lastName, //fullname.lName;
      //       email,
      //       phone: phoneNumber,
      //     };
      //   } else if (fieldName === "lname") {
      //     return {
      //       fName: firstName, //fullname.fName;
      //       lName: fieldVal,
      //       email,
      //       phone: phoneNumber,
      //     };
      //   } else if (fieldName === "email") {
      //     return {
      //       fName: firstName, //fullname.fName;
      //       lName: lastName,
      //       email: fieldVal,
      //       phone: phoneNumber,
      //     };
      //   } else if (fieldName === "phone") {
      //     return {
      //       fName: firstName, //fullname.fName;
      //       lName: lastName,
      //       email,
      //       phone: fieldVal,
      //     };
      //   }
    });
  }
  function setUsernameOnTop(e) {
    e.preventDefault();
    setTopDetails({
      fName: firstName,
      lName: lastName,
      email: email,
      phone: phoneNumber,
    });
  }
  return (
    <>
      <div className="formCont">
        <SideDetails obj={topDetails} />
        <h2 className="helloName">
          Hello ! {firstName} {lastName} {email} {phoneNumber}
        </h2>
        <Form
          setUsernameOnTop={setUsernameOnTop}
          changeValue={changeValue}
          details={details}
        />
      </div>
    </>
  );
}

export default MainApp;
