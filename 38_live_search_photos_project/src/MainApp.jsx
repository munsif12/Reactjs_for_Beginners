import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchResultImage from "./SearchResultImage";
function MainApp() {
  const [search, setSearch] = useState("blue");
  function changeValue(e) {
    var userValue = e.target.value;
    setSearch(userValue);
    console.log(search);
  }
  useEffect(() => {
    // if (search === "") {
    //   setSearch("mango");
    // }
  }, [search]);
  return (
    <div className="cont">
      <div className="heading">
        <h2>Live Search</h2>
      </div>
      <div className="mainApp">
        <Search search={search} changeValue={changeValue} />
        <SearchResultImage search={search} />
      </div>
    </div>
  );
}

export default MainApp;
