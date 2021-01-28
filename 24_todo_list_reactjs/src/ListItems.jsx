import React from "react";

function ListItems(props) {
  return (
    <>
      <div className="listData">
        <span
          onClick={() => {
            props.removeItem(props.id);
          }}
        >
          X
        </span>
        <li>{props.data}</li>
      </div>
    </>
  );
}

export default ListItems;
