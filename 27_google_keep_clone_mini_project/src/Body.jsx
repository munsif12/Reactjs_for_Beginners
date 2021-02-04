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
        return {
          title: "",
        };
      });
    }
  }
  function deleteFunction(id) {
    console.log(`Deleted div no ${id}`);
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
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Body;
