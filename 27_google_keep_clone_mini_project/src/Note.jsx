import React from "react";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
function Note(props) {
  return (
    <li>
      <div className="note">
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            textTransform: "capitalize",
          }}
        >
          {props.val.title}
        </p>
        <p style={{ wordBreak: "break-word" }}>{props.val.discription}</p>
        <div
          className="deleteBtn"
          onClick={() => {
            props.deleteFunction(props.id);
          }}
        >
          <RestoreFromTrashIcon />
        </div>
      </div>
    </li>
  );
}

export default Note;
