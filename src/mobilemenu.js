import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  
  useEffect(() => {
    const toggleCheckbox = document.getElementById('toggle1');
    const menuLinks = document.querySelectorAll('.menu1 a');

    const handleLinkClick = () => {
      toggleCheckbox.checked = false;
    };

    menuLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
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
          <li><Link className="link2" to="/news">News</Link></li>
          <li><Link className="link2" to="/archive">Archive</Link></li>
          <li><Link className="link2" to="/repvsdem">Republic vs Democracy</Link></li>
          <li><Link className="link2" to="/hamilton">Hamilton Method</Link></li>
          <li><Link className="link2" to="/electors">Electors Convention</Link></li>
          <li><Link className="link2" to="/book">Book</Link></li>
          <li><Link className="link2" to="/faq">FAQ</Link></li>
          <li><Link className="link2" to="/contribute">Contribute</Link></li>
          <li><Link className="link2" to="/contact">Contact</Link></li>
        </nav>
      </nav>
    </div>
  );
};

export default MobileMenu;
