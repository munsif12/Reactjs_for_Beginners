import React, { useState } from "react";
import Form from "./Form";
import Note from "./Note";
function Body() {
  var [value, setValue] = useState({
    title: "",
    discription: "",
  });
  var [arrayOfValues, setArrayOfValues] = useState([]);
  function getValue(e) {
    const currVal = e.target.value;
    const currName = e.target.name;
    setValue((preVal) => {
      return {
        ...preVal,
        [currName]: currVal,
      };
    });
  }
  //   var [title, discription] = value;
  function submitFunction() {
    if (value.title === "" || value.discription === "") {
      alert("title ND Desc cant be null");
    } else {
      setArrayOfValues((preVal) => {
        return [...preVal, value];
      });
      setValue((preVal) => {
        console.log(preVal);
        return {
          title: "",
          discription: "",
        };
      });
    }
  }
  function deleteFunction(id) {
    console.log(`Deleted div no ${id + 1}`);
    console.log(arrayOfValues);
    setArrayOfValues((preVal) => {
      return preVal.filter((currVal, index) => {
        return index !== id;
      });
    });
    console.log(arrayOfValues);
  }
  return (
    <div className="body">
      <div className="inputArea">
        <Form
          getValue={getValue}
          value={value}
          submitFunction={submitFunction}
        />
      </div>
      <div className="userNotes">
        <ul>
          {arrayOfValues.map((val, index) => {
            return (
              <Note
                val={val}
                deleteFunction={deleteFunction}
                id={index + 1}
                key={index}
                index={index}
              />
            );
          })}
        </ul>
      </div>
      <div id="quotetation">
        <h3 className="heading">
          <span className="quotationMark ">“</span>{" "}
          <span className="firstWord">You</span> have to make your own condensed
          notes. You learn from MAKING them. A lot of thinking goes into
          deciding what to include and exclude. You develop your own system of
          abbreviations and memory methods for the information.
          <span className="quotationMark">”</span>
        </h3>
        <h6 style={{ textAlign: "center" }} className="quote_auther">
          <span className="quotationMark ">
            ― Peter Rogers, Straight A at Stanford and on to Harvard "
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Body;
