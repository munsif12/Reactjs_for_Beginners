import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function MainApp() {
  return (
    <div>
      <p className="title text-center">HELLO BOOTSTRAP</p>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#">
                Pricing
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                role="menuitem"
              >
                Dropdown link
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/#">
                  Action
                </a>
                <a class="dropdown-item" href="/#">
                  Another action
                </a>
                <a class="dropdown-item" href="/#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div
              className="card text-white bg-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Primary card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              class="card text-white bg-success mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              class="card text-white bg-warning mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Warning card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="alert alert-success"
        role="alert"
        style={{ maxWidth: "30rem" }}
      >
        <h4 className="alert-heading text-center mr-auto">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
    </div>
  );
}

export default MainApp;
