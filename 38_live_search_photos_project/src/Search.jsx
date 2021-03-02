import React from "react";

function Search({ search, changeValue }) {
  return (
    <div className="serchBar">
      <form className="iputForm">
        <input
          type="text"
          name="search"
          id="search"
          onChange={changeValue}
          value={search}
        />
      </form>
    </div>
  );
}

export default Search;
