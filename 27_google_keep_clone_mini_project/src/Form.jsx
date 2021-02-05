import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
function Form(props) {
  var [displayInput, setDisplayInput] = useState(false);
  function displayDisc() {
    setDisplayInput(() => {
      if (!displayInput) {
        document.getElementById("user_note_title").style.cssText =
          "border-bottom:1px solid black;box-shadow:none;border-radius: 0px;";
        document.getElementById("discription").style.cssText =
          "display:inline;border-bottom:1px solid black;border-radius:0px";
        document.querySelector("form").style.cssText =
          "box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);";
        document.getElementById("quotetation").style.display = "none";
        document.getElementById("footerCont").style.display = "none";
        return true;
      } else {
        // window.addEventListener("click", () => {
        //   document.getElementById("discription").style.display = "none";
        //   return false;
        // });
      }
    });
  }
  const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
      display: theme.none,
    },
    absolute: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    otherClass: {
      background: "red",
    },
  }));
  const classes = useStyles();
  return (
    <form action="">
      <input
        style={{ margin: "0px" }}
        className="title"
        type="text"
        name="title"
        id="user_note_title"
        placeholder="Note Title"
        autoComplete="off"
        onClick={displayDisc}
        onChange={props.getValue}
        value={props.value.title}
      />
      <input
        className="discription"
        type="text"
        name="discription"
        id="discription"
        placeholder="Note Description"
        autoComplete="off"
        onChange={props.getValue}
        value={props.value.discription}
      />
      <div id="submitButton">
        <Tooltip
          id="submitButton"
          class="submitButton"
          title="Add"
          aria-label="add"
          onClick={props.submitFunction}
        >
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </form>
  );
}

export default Form;
