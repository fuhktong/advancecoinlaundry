import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/about">ABOUT</Link></li>
        <li>
          <div id="services">SERVICES</div>
          <div className="dropdown-content">
            <Link to="/coinmachine">COIN-OPERATED MACHINES</Link>
            <Link to="/washfold">WASH & FOLD</Link>
            <Link to="/dryclean">DRY CLEANING</Link>
          </div>
        </li>
        <li><Link to="/speedqueen">SPEED QUEEN APP</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;