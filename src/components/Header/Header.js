import React from "react";
import "./Header.css";
import Form from "../Form/Form.js";
import { Link } from 'react-router-dom'

const Header = ({ handleSortTypes, setSearchQuery, restoreHomePage }) => {
  return (
    <header>
      <div className='logo-name'>
        <img src='./assets/tomatillo.png' alt='tomatillo' />
        <p>Rancid Tomatillos</p>
      </div>
      <div className='header-right'>
        <Form handleSortTypes={handleSortTypes} setSearchQuery={setSearchQuery}/>
        <Link to={`/`} onClick={() => restoreHomePage()} className="home-button click">Home</Link>
      </div>

    </header>
  );
};

export default Header;
