import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Page from "./Page";
import Contect from "./Contect";
import Services from "./Services";
import Footer from "./Footer";
import Team from "./Team";
import Errorpage from "./ErrorPage";
import SvgHome from "./SvgHome";
import SvgAbout from "./SvgAbout";
import EmpData from "./empData";
function MainApp() {
  console.log(EmpData);
  return (
    <div className="mainApp">
      <Navbar />
      <Switch>
        {/* HOME PAGE */}
        <Route
          exact
          path="/"
          component={() => {
            return (
              <Page
                pageName="Home"
                moto="Grow Your Business With Us"
                companyName="Company Name"
                about="We are a team of Talent And Experianced Software Developers"
                buttenInnerText="Get Stareted"
                SvgHome={() => {
                  return <SvgHome />;
                }}
              />
            );
          }}
        />
        {/* ABOUT PAGE */}
        <Route
          exact
          path="/about"
          component={() => {
            return (
              <Page
                pageName="About"
                moto=" Have You Had Your Softwares Today? "
                companyName="Developers Hub"
                about="We have been developing softwares for more then 20 years"
                buttenInnerText="Contect Us"
                SvgHome={() => {
                  return <SvgAbout />;
                }}
              />
            );
          }}
        />
        {/* CONTECT US */}
        <Route
          exact
          path="/contect"
          component={() => {
            return <Contect />;
          }}
        />
        PROJECTS
        <Route
          exact
          path="/services"
          component={() => {
            return <Services />;
          }}
        />
        {/*OUR TEAM */}
        <Route
          exact
          path="/team"
          component={() => {
            return (
              <div className="team">
                <h1 className="teamMembers">TEAM MEMBERS</h1>
                <div className="cardsWrapper">
                  {EmpData.map((val) => {
                    return (
                      <Team
                        empName={val.empName}
                        jobTitle={val.jobTitle}
                        empImage={val.empImage}
                        university={val.university}
                      />
                    );
                  })}
                </div>
              </div>
            );
          }}
        />
        {/*ERROR PAGE */}
        <Route
          component={() => {
            return <Errorpage />;
          }}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default MainApp;
