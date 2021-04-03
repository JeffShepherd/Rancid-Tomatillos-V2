import React from "react";
import "./Header.css";
import Form from "../Form/Form.js";
import { Link } from 'react-router-dom'

const Header = ({ state, setState, handleSortTypes, filterBySearchValue, restoreHomePage }) => {
  return (
    <header>
      <div className='logo-name'>
        <img src='./assets/tomatillo.png' alt='tomatillo' />
        <p>Rancid Tomatillos</p>
      </div>
      <div className='header-right'>
        <Form state={state} setState={setState} handleSortTypes={handleSortTypes} filterBySearchValue={filterBySearchValue}/>
        <Link to={`/`} onClick={() => restoreHomePage()} className="home-button click">Home</Link>
      </div>

    </header>
  );
};

export default Header;
