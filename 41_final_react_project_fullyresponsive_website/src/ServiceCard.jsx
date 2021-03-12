import React from "react";

function ServiceCard({
  sName = "dataNotComming",
  modeifiedClassName = "1",
  sNo = "1",
}) {
  return (
    // services services1
    <div className={modeifiedClassName}>
      <div className="serviceTitle_top">
        <p className="service_title">{sName}</p>
      </div>
      <div className="serviceImg"></div>
      <div className="serviceNumber_lower">
        <p className="service_number">Service {sNo}</p>
      </div>
      <div className="hoverCard">
        <h1 className="underCons">Under Construction</h1>
      </div>
    </div>
  );
}

export default ServiceCard;
