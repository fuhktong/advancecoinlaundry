import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/news">News</Link></li>
        <li>
          <div id="reforms">Reforms</div>
          <div className="dropdown-content">
            <Link to="/repvsdem">Republic vs Democracy</Link>
            <Link to="/hamilton">Hamilton Method</Link>
            <Link to="/electors">Electors Convention</Link>
          </div>
        </li>
        <li><Link to="/book">Book</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contribute">Contribute</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;