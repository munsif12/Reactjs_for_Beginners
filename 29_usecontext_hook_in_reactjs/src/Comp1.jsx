import React from "react";
import { useContext } from "react";
import Comp2 from "./Comp2";
import { providerName, consumerName } from "./index";
import { creatingContextObjectForComponent1 } from "./MainApp";
function Comp1() {
  //reating use ComtextHook to get rid od consumer hell in Component 2
  var provider = useContext(providerName);
  var Consumer = useContext(consumerName);
  var contextObj = useContext(creatingContextObjectForComponent1);
  const { name, degree, university, age } = contextObj;
  return (
    <>
      <div className="Component_1">
        <h4>
          This is the result of Context hook {"->"} check the code to see the
          difference
        </h4>
        <p style={{ color: "green" }}>
          Context hook is used to get rid of consumer hell like callback hell
        </p>
        <div className="Component_1_1">
          <p>
            THis is Contect Api :- Context provider is =
            <em>
              <strong> {provider} </strong>
            </em>
            and Consumer is =
            <em>
              <strong>{Consumer}</strong>
            </em>
          </p>
        </div>
        <div className="obj_Component_1_1">
          {
            <>
              <h4> Getting object from Context API = provider is MainApp</h4>
              <h6 style={{ fontSize: "16px" }}>
                {"{"}
                <br />
                {name}
                <br />
                {degree}
                <br />
                {university}
                <br />
                {age}
                <br />
                {"}"}
              </h6>
            </>
          }
        </div>
      </div>
      <div className="Component_2">
        <Comp2 />
      </div>
    </>
  );
}

export default Comp1;
