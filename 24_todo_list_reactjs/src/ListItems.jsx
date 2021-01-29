import React from "react";

function ListItems(props) {
  return (
    <>
      <div className="listData">
        <span
          className="remove"
          onClick={() => {
            props.removeItem(props.id);
          }}
        >
          X
        </span>
        <li>
          {props.id + 1} : {props.data}
        </li>
      </div>
    </>
  );
}

export default ListItems;
