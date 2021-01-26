import React from "react";

function SideDetails(props) {
  var {
    fName: Name,
    lName: LastName,
    email: Email,
    phone: PhoneNo,
  } = props.obj;
  return (
    <div className="Details">
      <h3>Details:</h3>
      <p>
        <ul>
          <li>
            <span>{Name}</span>
          </li>
          <li>
            <span>{LastName}</span>
          </li>
          <li>
            <span>{Email}</span>
          </li>
          <li>
            <span>{PhoneNo}</span>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default SideDetails;
