import React, { memo } from "react";
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
              <button
                onClick={() => {
                  history.push("/services");
                }}
              >
                {buttenInnerText}
              </button>
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
/* agr mara prop ke value change na hony ka bawajood agr component render horha h or ham chahty ha ka
 hamra component use waqt render ho jab hamry props updateho to iseleya hamn MEMO use
  krty h ya hamary component ko us waqt render kry ga jab props update hongy memo ko
   use karny ka leya hamy components ko memo sa wrap krna hoga  
   EXAMPLE :-
   const componentA= memo( (props)=>{
     return <h1>Hello Memo World</h1>
   } );
   if yo are not using arror function then wrap it when ur exporting the function

   export default memo(Page);
    */

export default memo(Page);
