import React from "react";
import { providerName, consumerName } from "./index";
import { creatingContextObjectForComponent2 } from "./MainApp";
function Comp2() {
  return (
    //   consumer method can only take a function
    //this code is looking hell and too avoid this useContext hook is created when is used in Comp1.jsx file see that
    <>
      <div className="Component_2">
        <h4>
          This is the result of consumer Context {"->"} check the code to see
          the difference
        </h4>
        <div className="component_2_1">
          <providerName.Consumer>
            {(providerName) => {
              //function of consumer method
              return (
                <consumerName.Consumer>
                  {(consumerName) => {
                    return (
                      <div className="Component_2">
                        <p>
                          THis is Contect Api :- Context provider is =
                          <em>
                            <strong> {providerName} </strong>
                          </em>
                          and Consumer is =
                          <em>
                            <strong>{consumerName}</strong>
                          </em>
                        </p>
                      </div>
                    );
                  }}
                </consumerName.Consumer>
              );
            }}
          </providerName.Consumer>
        </div>
        <div className="obj_component_2_2">
          <creatingContextObjectForComponent2.Consumer>
            {(creatingContextObjectForComponent2) => {
              var {
                name,
                degree,
                university,
                age,
              } = creatingContextObjectForComponent2;
              return (
                <>
                  <h4>
                    {" "}
                    Getting object from Context API = Provider is MainApp
                  </h4>
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
              );
            }}
          </creatingContextObjectForComponent2.Consumer>
        </div>
      </div>
    </>
  );
}

export default Comp2;
