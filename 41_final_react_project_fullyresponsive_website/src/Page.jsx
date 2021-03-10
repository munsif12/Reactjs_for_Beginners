import React from "react";
import { useHistory } from "react-router-dom";
function Page({
  pageName,
  moto,
  companyName,
  about,
  SvgHome,
  buttenInnerText,
}) {
  const history = useHistory();
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
            {pageName === "About" ? (
              <button
                onClick={() => {
                  history.push("/contect");
                }}
              >
                {buttenInnerText}
              </button>
            ) : (
              <button>{buttenInnerText}</button>
            )}
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
