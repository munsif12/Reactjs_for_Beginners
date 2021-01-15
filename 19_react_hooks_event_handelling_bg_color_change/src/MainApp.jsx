import React, { useState } from "react";

function MainApp() {
  var arrayOfColors1 = [
    "#c58e8e",
    "#898b60",
    "#f12af8",
    "#9fa4e9",
    "#ebe853",
    "#da3566",
  ];

  var arrayOfColors2 = [
    "#dd8ca4",
    "#d89c84",
    "#ce953f",
    "#c2eb30",
    "#5099ec",
    "#e855f5",
  ];
  //function will return us a random color
  var val1 = () => {
    let color1 =
      arrayOfColors1[Math.floor(Math.random() * arrayOfColors1.length)];
    return color1;
  };
  //function will return us a random color
  var val2 = () => {
    let color2 =
      arrayOfColors2[Math.floor(Math.random() * arrayOfColors2.length)];
    return color2;
  };
  var randomPosotionsArray = [
    "35deg",
    "70deg",
    "128deg",
    "145deg",
    "235deg",
    "310deg",
  ];

  // will return us a random posotion
  var randomPos = () => {
    let position =
      randomPosotionsArray[
        Math.floor(Math.random() * randomPosotionsArray.length)
      ];
    return position;
  };
  //useState to change the state of background
  var [color, setColor] = useState(
    `linear-gradient(${randomPos()}, ${val1()},${val2()}) `
  );
  //function to cange the background color of body
  var chngeBodyBackground = () => {
    console.log(color);
    console.log(`chk random ${randomPos()}`);
    console.log(`chk val1 ${val1()}`);
    console.log(`chk val2 ${val2()}`);

    //  consoling for testing purpose

    setColor(`linear-gradient(${randomPos()}, ${val1()},${val2()}) `);
    document.getElementById("body").style.background = color;
  };

  return (
    <div className="dataItems">
      <h1>Color Combo</h1>
      <h2
      /*
        style={{
          fontSize: "35px",
          background: `-webkit-linear-gradient(${randomPos()}, ${val1()},${val2()}) `,
          webkitBackgroundClip: "text",
        }} */ //to set a gradient text
      >
        {color}
      </h2>
      <button onClick={chngeBodyBackground}>Change background Color</button>
    </div>
  );
}

export default MainApp;
