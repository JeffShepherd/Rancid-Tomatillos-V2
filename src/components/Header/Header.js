import React from "react";
import "./Header.css";
const Header = ({ returnToHomePage }) => {
  return (
    <header>
      <p>Rancid Tomatillos</p>
      <button onClick={() => returnToHomePage()} className="click">Home</button>
    </header>
  );
};

export default Header;
