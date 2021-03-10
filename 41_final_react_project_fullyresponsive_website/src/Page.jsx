import React from "react";
function Page({
  pageName,
  moto,
  companyName,
  about,
  SvgHome,
  buttenInnerText,
}) {
  return (
    <div className="page">
      <div className="leftDetails">
        <div className="detalisWrapper">
          <div className="moto">
            <p className="moto">{moto}</p>
          </div>
          <div className="companyName">
            <p>{companyName}</p>
          </div>
          <div className="aboutCompany">
            <p className="aboutParagraph">{about}</p>
          </div>
          <div className="getStarted">
            <button>{buttenInnerText}</button>
          </div>
        </div>
      </div>
      <div className="rightLogo">
        <SvgHome />
      </div>
    </div>
  );
}

export default Page;
