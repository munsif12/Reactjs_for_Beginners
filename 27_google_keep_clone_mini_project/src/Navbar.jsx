import React from "react";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <div className="navbarCont">
      <nav class="navbar  navbar-light bg-warning">
        <a class="navbar-brand" href="/#">
          <EmojiObjectsIcon style={{ color: "white", transform: "scale(2)" }} />
        </a>
        <h2 class="navbar-brand " className="navbar_cloneTitle">
          Google Keep clone
        </h2>
      </nav>
    </div>
  );
}

export default Navbar;
