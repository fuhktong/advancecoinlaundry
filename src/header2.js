import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header2.css";

const Header2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <header className="header2">
      <div className="logo-header">
        <a href="/">
          <img
            src="/advance_coin_laundry_logo_2.png"
            alt="Advance Coin Laundry"
          />
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <div id="services">SERVICES</div>
            <div className="dropdown-content">
              <Link to="/coinmachine">COIN-OPERATED MACHINES</Link>
              <Link to="/washfold">WASH & FOLD</Link>
              <Link to="/dryclean">DRY CLEANING</Link>
            </div>
          </li>
          <li>
            <Link to="/speedqueen">SPEED QUEEN APP</Link>
          </li>
          <li>
            <Link to="/reviews">REVIEWS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div
        className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={handleLinkClick}>
          ABOUT
        </Link>
        <Link to="/coinmachine" onClick={handleLinkClick}>
          COIN-OPERATED MACHINES
        </Link>
        <Link to="/washfold" onClick={handleLinkClick}>
          WASH & FOLD
        </Link>
        <Link to="/dryclean" onClick={handleLinkClick}>
          DRY CLEANING
        </Link>
        <Link to="/speedqueen" onClick={handleLinkClick}>
          SPEED QUEEN APP
        </Link>
        <Link to="/reviews" onClick={handleLinkClick}>
          REVIEWS
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header2;
