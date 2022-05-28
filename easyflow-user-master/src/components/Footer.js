import React from "react";
import "./ComponentsCss.css";

class Footer extends React.Component {
  render() {
    return (
      <footer
        id="sticky-footer"
        className="flex-shrink-0 bg-dark text-white padding"
      >
        <div className="container text-center">
          <small>Copyright © BlueCollar</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
