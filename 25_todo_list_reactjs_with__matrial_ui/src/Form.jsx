import React from "react";
// import TextField from "@material-ui/core/TextField";
// import { withStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
function Form(props) {
  return (
    <>
      <form>
        <input
          type="text"
          label="Add item"
          variant="outlined"
          id="custom-css-outlined-input"
          onChange={props.gettingVal}
          placeholder="Add Item"
          name="userInput"
          style={{
            height: "30px",
            width: "200px",
            textAlign: "center",
            outline: "none",
            border: "none",
            borderTop: "1px solid green",
            borderBottom: "1px solid green",
          }}
        />
        <Button
          style={{
            height: "34px",
            textAlign: "center",
            outline: "none",
            color: "green",
            border: "none",
            borderRadius: "0px",
            borderTop: "1px solid green",
            borderBottom: "1px solid green",
          }}
          //   variant="outlined"
          startIcon={<AddIcon />}
          onClick={props.click}
        >
          Add
        </Button>
      </form>
    </>
  );
}

export default Form;
