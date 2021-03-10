import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Page from "./Page";
import SvgHome from "./SvgHome";
import SvgAbout from "./SvgAbout";
import Contect from "./Contect";
function MainApp() {
  return (
    <div className="mainApp">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return (
              <Page
                pageName="Home"
                moto="Grow Your Business With Us"
                companyName="Developers Hub"
                about="We are a team of Talent And Experianced Software Developers"
                buttenInnerText="Get Stareted"
                SvgHome={() => {
                  return <SvgHome />;
                }}
              />
            );
          }}
        />
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
        <Route
          exact
          path="/contect"
          component={() => {
            return <Contect />;
          }}
        />
      </Switch>
    </div>
  );
}

export default MainApp;
