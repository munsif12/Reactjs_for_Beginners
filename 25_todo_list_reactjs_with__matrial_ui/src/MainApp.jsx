import React, { useState } from "react";
import Form from "./Form";
import ListItem from "./Listitem";
function MainApp() {
  var [inputVal, setInputVal] = useState("");
  var [lisItems, setListItems] = useState([]);
  //   var arrayOfNone = ["one", "two", "three"];
  function gettingVal(e) {
    setInputVal(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    setListItems((prevval) => {
      return [...prevval, inputVal];
    });
  }
  function deleteFunction(id) {
    setListItems((prevval) => {
      return prevval.filter((currVal, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }
  return (
    <>
      <div className="mainCont">
        <div className="title">
          <h1>Material Ui Todo List </h1>
        </div>
        <Form click={submit} gettingVal={gettingVal} inputVal={inputVal} />
        <ul>
          {lisItems.map((val, index) => {
            return (
              <ListItem
                lisItems={lisItems}
                delete={deleteFunction}
                value={val}
                key={index}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MainApp;
