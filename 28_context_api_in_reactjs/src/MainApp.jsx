import React, { createContext } from "react";
import Navbar from "./Navbar";
import Comp1 from "./Comp1";
import Footer from "./Footer";

var creatingContextObject = createContext();
const studentObj = {
  name: "Munsif",
  degree: "BSCS",
  university: "NUML",
  age: 22,
};
function MainApp() {
  return (
    <div className="MainApp">
      <Navbar />
      <creatingContextObject.Provider value={studentObj}>
        <Comp1 />
      </creatingContextObject.Provider>
      <Footer />
    </div>
  );
}

export default MainApp;
export { creatingContextObject };
