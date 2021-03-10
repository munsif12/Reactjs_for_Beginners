import React from "react";

function Contect() {
  return (
    <div className="contectUs">
      <div className="heading">
        <p style={{ color: "black" }}>Contect Us</p>
      </div>
      <div className="formWrapper">
        <div className="name">
          <div className="lableTag">
            <lable>Full Name</lable>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" Your Name here..."
          />
        </div>
        <div className="phone">
          <div className="lableTag">
            <lable>Phone</lable>
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Your Number"
          />
        </div>
        <div className="email">
          <div className="lableTag">
            <lable>Email</lable>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="etc@gmail.com"
          />
        </div>
        <div className="message">
          <div className="lableTag">
            <lable>Message</lable>
          </div>
          <textarea name="message" id="message" />
        </div>
        <div className="submit">
          <input type="submit" value="Submit" className="submitbtn" />
        </div>
      </div>
    </div>
  );
}

export default Contect;
