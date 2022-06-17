import React from "react";
import "./header.scss"
function Header() {
  return (
    <header className="header-main-container">
      <img
        className="header-pic"
        src={require("../../Assets/placeholder.png")}
        alt=""
      />
      <img
        className="header-circle"
        src={require("../../Assets/circleElement.png")}
        alt=""
      />
      <div className="header-topic">
        <p className="welcome">Welcome to</p>
        <p className="movie">MovieUP.</p>
      </div>
      <p className="header-detail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
    </header>
  );
}

export default Header;
