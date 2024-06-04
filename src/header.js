import React from 'react';
import NavBar from './NavBar';
import MobileMenu from './MobileMenu';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="home-button"> 
        <a href="/">
          <img src="/framers method tshirt.png" alt="Homes" />
        </a>
      </div>
      <NavBar />
      <MobileMenu />
    </header>
  );
};

export default Header;