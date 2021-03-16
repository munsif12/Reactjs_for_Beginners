import React from "react";
function ServiceCard({
  sName = "dataNotComming",
  modeifiedClassName = "1",
  sImg,
  sNo = "1",
}) {
  console.log(sImg);
  return (
    // services services1
    <div className={modeifiedClassName}>
      <div className="serviceTitle_top">
        <p className="service_title">{sName}</p>
      </div>
      <div className="serviceImg" style={{ background: 'url({ sImg })' }}>
        {/* {sImg} */}
        <img src={sImg} alt="not working" style={{ height: "100%", width: "100%" }} />
      </div>
      <div className="serviceNumber_lower">
        <p className="service_number">Service {sNo}</p>
      </div>
      <div className="hoverCard">
        <h1 className="underCons">More Details</h1>
        <p className="hoverP"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quia,
        ipsa nulla natus est vero optio sit alias ex officiis pariatur delectus
        facere ipsum doloremque distinctio veritatis, saepe unde architecto
        eos!</p>
        <h1 className="underCons"> THE END</h1>
      </div>
    </div>
  );
}

export default ServiceCard;
