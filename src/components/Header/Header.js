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
      <div>
        <input placeholder='Search movies' type='text'/>
        <button>submit</button>
        <Link to={`/`} className="home-button click">Home</Link>
      </div>

    </header>
  );
};

export default Header;
