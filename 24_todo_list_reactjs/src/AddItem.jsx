import React, { useState } from "react";
import ListItems from "./ListItems";
function AddItem() {
  var [listItem, setListItem] = useState(" ");
  var [items, setItems] = useState([]);
  function getInputValue(e) {
    setListItem(e.target.value);
  }
  function enterValue(e) {
    if (listItem === "" || listItem === null) {
      alert("List can't be Null");
      e.preventDefault();
    } else {
      setItems((prevVal) => {
        return [...prevVal, listItem];
      });
      setListItem("");
      e.preventDefault();
    }
  }
  //deliing items in the list
  function removeItem(id) {
    console.log(id);
    setItems((prevVal) => {
      return prevVal.filter((currVal, index) => {
        var res = index !== id;
        console.log(items);
        console.log(`result:${res} data: ${currVal} and index :${index}`);
        console.log(`After ${items}`);
        return res;
      });
    });
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
        <input type="submit" value="+" id="addBtn" />
      </form>
      <div className="listDataItems">
        <ul>
          {items.map((currVal, index) => {
            return (
              <ListItems
                data={currVal}
                key={index}
                removeItem={removeItem}
                id={index}
                empty={listItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddItem;
