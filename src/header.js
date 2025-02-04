import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="home-button">
        <a href="/">
          <img src="/advance_coin_laundry_logo_2.png" alt="Home" />
        </a>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
