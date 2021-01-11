import React, { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
function MainApp() {
  //variables to track the state of number
  //  [state,setState]=useState(parameter will be place inside statee variable)
  var [count, updateCount] = useState(
    0
  ); /*useSate return us an array.
   useState(0) sets its parameter value to count and updateCount will set the value after the state of countVar changes */

  //trying to change the color by hooks
  // var [colorChage, setColorChange] = useState(
  //   document.getElementById("counterValue")
  // );

  /* var colorVal = document.getElementById(
    "counterValue"
  ); if you click on the button
   before the browser gets value of the element then it will throw an value of undefined error
   NOTE:- PLEASE WAIT A FEW ECONDS TILL BROWSER READ VALUE OF ELEMET
   NOTE:- THIS APPROACH IS NOT GOOD 
   ALTERNATIVE :- use D.GEBID() insode in and dec function then it will work no matter what */

  // Increment Number Function
  const incBtn = () => {
    var colorVal = document.getElementById("counterValue");
    console.log(colorVal);
    colorVal.style.color = "green";
    updateCount(++count);
    console.log("Counter " + count);
  };
  // Decrement Number Function
  const decBtn = () => {
    var colorVal = document.getElementById("counterValue");
    colorVal.style.color = "red";
    updateCount(--count);
    console.log("Counter " + count);
  };

  //returning components
  return (
    <>
      <h1>INCREMENT AND DECREMENT</h1>
      <div className="mainApp">
        <div className="counterDiv">
          <h2 id="counterValue">{count}</h2>
        </div>
        <div className="IncDecDiv">
          <Decrement decBtn={decBtn} />
          <Increment incBtn={incBtn} />
        </div>
      </div>
      <h1 className="theEnd">THE END</h1>
    </>
  );
}

export default MainApp;
