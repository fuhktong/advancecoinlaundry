import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  useEffect(() => {
    const toggleCheckbox = document.getElementById("toggle1");
    const menuLinks = document.querySelectorAll(".menu1 a");

    const handleLinkClick = () => {
      toggleCheckbox.checked = false;
    };

    menuLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="p-menu1">
      <nav id="navbar" className="navigation" role="navigation">
        <input id="toggle1" type="checkbox" />
        <label className="hamburger1" htmlFor="toggle1">
          <div className="top"></div>
          <div className="meat"></div>
          <div className="bottom"></div>
        </label>
        <nav className="menu1">
          <li>
            <Link className="link2" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="link2" to="/coinmachine">
              COIN-OPERATED MACHINES
            </Link>
          </li>
          <li>
            <Link className="link2" to="/washfold">
              WASH & FOLD
            </Link>
          </li>
          <li>
            <Link className="link2" to="/dryclean">
              DRY CLEANING
            </Link>
          </li>
          <li>
            <Link className="link2" to="/speedqueen">
              SPEED QUEEN APP
            </Link>
          </li>
          <li>
            <Link className="link2" to="/reviews">
              REVIEWS
            </Link>
          </li>
          <li>
            <Link className="link2" to="/contact">
              CONTACT
            </Link>
          </li>
          <li></li>
        </nav>
      </nav>
    </div>
  );
};

export default MobileMenu;
