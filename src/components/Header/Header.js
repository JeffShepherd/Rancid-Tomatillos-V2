import React from "react";
import "./Header.css";

const Header = ({ returnToHomePage }) => {
  return (
    <header>
      <div className='logo-name'>
        <img src='./assets/tomatillo.png' alt='tomatillo' />
        <p>Rancid Tomatillos</p>
      </div>
      <button onClick={() => returnToHomePage()} className="click">Home</button>
    </header>
  );
};

export default Header;
