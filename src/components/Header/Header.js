import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'

const Header = ({ returnToHomePage }) => {
  return (
    <header>
      <div className='logo-name'>
        <img src='./assets/tomatillo.png' alt='tomatillo' />
        <p>Rancid Tomatillos</p>
      </div>
      <Link to={`/`} className="home-button click">Home</Link>
      {/* <button onClick={() => returnToHomePage()} className="click">Home</button> */}
    </header>
  );
};

export default Header;
