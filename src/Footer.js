import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="/"><h2>Advance Coin Laundry</h2></a>
            <div className="footer-container">
                <div>
                    <ul className="footer-links">
                        <li><Link className="link2" to="/about">ABOUT</Link></li>
                        <li><Link className="link2" to="/speedqueen">SPEED QUEEN APP</Link></li>
                        <li><Link className="link2" to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="footer-links">
                        <li><Link className="link2" to="/coinmachine">COIN-OPERATED MACHINES</Link></li>
                        <li><Link className="link2" to="/washfold">WASH & FOLD</Link></li>
                        <li><Link className="link2" to="/dryclean">DRY CLEANING</Link></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;