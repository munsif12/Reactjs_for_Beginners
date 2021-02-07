import React from "react";
import { providerName, consumerName } from "./index";
import { creatingContextObject } from "./MainApp";
function Comp2() {
  return (
    //   consumer method can only take a function
    <>
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
      <creatingContextObject.Consumer>
        {(creatingContextObject) => {
          var { name, degree, university, age } = creatingContextObject;
          return (
            <>
              <h4> Getting object from Context API =. Provide is MainApp</h4>
              <h6 style={{ fontSize: "22px" }}>
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
      </creatingContextObject.Consumer>
    </>
  );
}

export default Comp2;
