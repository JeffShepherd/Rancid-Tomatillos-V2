import React from "react";
import "./Header.css";
import Form from "../Form/Form.js";
import { Link } from 'react-router-dom'

const Header = ({ 
  state, 
  setState, 
  filterBySearchValue, 
  restoreHomePage
  }) => {
  return (
    <header>
      <Link to={`/`} onClick={() => restoreHomePage()} className="logo-name click">
          <img src='./assets/tomatillo.png' alt='tomatillo' />
          <p>Rancid Tomatillos</p>
      </Link>
      <div className='header-right'>
        <Form 
          state={state} 
          setState={setState} 
          filterBySearchValue={filterBySearchValue}
        />
        <Link to={`/`} onClick={() => restoreHomePage()} className="home-button click">Home</Link>
      </div>

    </header>
  );
};

export default Header;
