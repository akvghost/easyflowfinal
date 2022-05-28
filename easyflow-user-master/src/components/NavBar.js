import React from "react";
import "./ComponentsCss.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          src={require("./logo.png")}
          height={70}
          width={70}
          className="d-inline-block align-top"
          id="logoImg"
          alt="Here"
        />
        <div className="container-fluid">
          <div className="navbar-brand">BlueCollar</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      About BlueCollar
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="www.google.com">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
