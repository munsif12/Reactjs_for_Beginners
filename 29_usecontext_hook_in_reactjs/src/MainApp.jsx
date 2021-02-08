import React, { createContext } from "react";
import Navbar from "./Navbar";
import Comp1 from "./Comp1";
import imgConsumerHell from "./consumerHell.PNG";

var creatingContextObjectForComponent2 = createContext();
var creatingContextObjectForComponent1 = createContext();
const studentObj = {
  name: "Munsif",
  degree: "BSCS",
  university: "NUML",
  age: 22,
};
const studentObj1 = {
  name: "Kazmii",
  degree: "BSCS",
  university: "NUML",
  age: 21,
};
function MainApp() {
  return (
    <>
      <Navbar />
      <div className="MainApp">
        <div className="heading">
          <h1 style={{ textAlign: "center", fontSize: "16px" }}>
            ContextHook in react vs Context Api
          </h1>
        </div>
        <div className="difference">
          <ul>
            <li>Context hook came to resolve context Api problem</li>
            <li>
              Context api problem was its was creating a code hell at consumer
              side {"==>"}
            </li>
          </ul>
          <div className="consumerHell">
            <img
              src={imgConsumerHell}
              alt="sds"
              srcset=""
              style={{ height: "450px", width: "550px" }}
            />
          </div>
        </div>
        <creatingContextObjectForComponent2.Provider value={studentObj1}>
          <creatingContextObjectForComponent1.Provider value={studentObj}>
            <Comp1 />
          </creatingContextObjectForComponent1.Provider>
        </creatingContextObjectForComponent2.Provider>
      </div>
    </>
  );
}

export default MainApp;
export {
  creatingContextObjectForComponent2,
  creatingContextObjectForComponent1,
};
