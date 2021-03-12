import React, { useState } from "react";

function Contect() {
  const [FormFields, setFormFields] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const { name, phoneNumber: phone, email, message } = FormFields;
  function handleChange(e) {
    const userValue = e.target.value;
    const currFieldName = e.target.name;
    setFormFields((preVal) => {
      return {
        ...preVal,
        [currFieldName]: userValue,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(FormFields);
    alert(
      `Your name is ${name} your phone number is ${phone} your email is ${email} and your msg is ${message}`
    );
  }
  return (
    <div className="contectUs">
      <div className="heading">
        <p style={{ color: "black" }}>Contect Us</p>
      </div>
      <div className="formWrapper">
        <form action="" method="GET" onSubmit={handleSubmit}>
          <div className="name">
            <div className="lableTag">
              <lable>Full Name</lable>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              spellCheck="true"
              value={name}
              onChange={handleChange}
              placeholder=" Your Name here..."
            />
          </div>
          <div className="phone">
            <div className="lableTag">
              <lable>Phone</lable>
            </div>
            <input
              type="text"
              name="phoneNumber"
              id="phone"
              value={phone}
              onChange={handleChange}
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
              value={email}
              onChange={handleChange}
              placeholder="etc@gmail.com"
            />
          </div>
          <div className="message">
            <div className="lableTag">
              <lable>Message</lable>
            </div>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={handleChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Submit" className="submitbtn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contect;
