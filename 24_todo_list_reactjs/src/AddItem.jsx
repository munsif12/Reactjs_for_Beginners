import React, { useState } from "react";
import ListItems from "./ListItems";
function AddItem() {
  var [listItem, setListItem] = useState("");
  var [items, setItems] = useState([]);
  function getInputValue(e) {
    setListItem(e.target.value);
  }
  function enterValue(e) {
    e.preventDefault();
    setItems((prevVal) => {
      return [...prevVal, listItem];
    });
    setListItem("");
  }
  return (
    <div className="inputField">
      <form onSubmit={enterValue}>
        <input
          type="text"
          name="addItem"
          id="addItem"
          onChange={getInputValue}
          value={listItem}
          placeholder="Add Item"
        />
        <input type="submit" value="+" />
      </form>
      <ul>
        {items.map((currVal, index) => {
          return <ListItems data={currVal} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default AddItem;
