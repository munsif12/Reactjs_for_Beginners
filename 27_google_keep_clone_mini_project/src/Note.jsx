import React from "react";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
function Note(props) {
  return (
    <li>
      <div className="note">
        <div className="noteNumber">
          <p className="note_number_p">{props.id}</p>
        </div>
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
            props.deleteFunction(props.index);
          }}
        >
          <RestoreFromTrashIcon />
        </div>
      </div>
    </li>
  );
}

export default Note;
