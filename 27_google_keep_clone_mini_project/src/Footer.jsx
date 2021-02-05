import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div id="footerCont">
      <nav class="navbar  navbar-light bg-warning">
        <a class="navbar-brand" href="/#">
          <CopyrightIcon style={{ color: "white", transform: "scale(2)" }} />
        </a>
        <h2 class="navbar-brand " className="footer_copyright">
          {" "}
          &copy; 2009 Munsif Ali Misri
        </h2>
      </nav>
    </div>
  );
}

export default Footer;
