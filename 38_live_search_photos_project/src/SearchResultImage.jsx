import React from "react";

function SearchResultImage({ search }) {
  const imgUrl = `https://source.unsplash.com/1600x900/?${search}`;
  console.log(search);
  return (
    <div className="SearchResultImage">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}

export default SearchResultImage;
