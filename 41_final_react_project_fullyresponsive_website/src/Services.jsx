import React from "react";
import ServicesData from "./servicesData";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <div className="services">
      <div className="servicesWrapper">
        {/* card 1 start */}
        {ServicesData.map((val, index) => {
          return (

            <ServiceCard
              sName={val.sName}
              sImg={val.sImg}
              modeifiedClassName={"service service" + ++index}
              sNo={++index}
              key={++index}
            />
          );
        })}
        {/* card 1 end */}
      </div>
    </div>
  );
}

export default Services;
