import React from "react";
import styled from 'styled-components';
import "./sections.css";

export const DividerWhite = () => (
  <section>
      <div className="dividerwhite"></div>
  </section>
);

export const Dividerf5f4f0 = () => (
  <section>
      <div className="dividerf5f4f0"></div>
  </section>
)

export const SpaceDivider = () => (
  <div className="spacedivider"></div>
);

export const SpaceDividerSmall = () => (
  <div className="spacedividersmall"></div>
);

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export const Footer2 = () => (
  <div className="footer2">
    <div className="footer2-hours">
      <div className="footer2-h1">Hours</div>
      <div className="footer2-p">Mon - Thu</div>
      <div className="footer2-p">7:30 am - 10:00 pm</div>
      <div className="footer2-p">Fri - Sun</div>
      <div className="footer2-p">7:00 am - 10:00 pm</div>
    </div>
    <div className="footer2-visit">
      <div className="footer2-h1">Visit Us</div>
      <div className="footer2-p">
      <StyledLink href="https://maps.app.goo.gl/PXH87qQesxWAWqbKA" target="_blank" rel="noreferrer">
      5575 S Semoran Blvd<br></br>Suite 46<br></br>Orlando, FL 32822
      </StyledLink>
      </div>
      <div className="footer2-p">Get Directions</div>
      <div className="footer2-p">Behind the Library on Hoffner Avenue.</div>
      <div className="footer2-p">Enter “Advance Coin Laundry” into Waze or Google Maps to search for our location</div>
    </div>
    <div className="footer2-contact">
      <div className="footer2-h1">Contact Us</div>
      <div className="footer2-p">
        <StyledLink href="tel:+14072379531">(407) 237-9531</StyledLink>
      </div>
      <div className="footer2-p">
        <StyledLink href="mailto:advancecoin47@gmail.com">advancecoin47@gmail.com</StyledLink>
      </div>
    </div>
  </div>
);

export const HomePage = () => (
  <section className="homepage-section">
    <div className="homepage-section-text">
      <h2 className="homepage-title">Advance Coin Laundry</h2>
      <h1 className="homepage-subtitle">Laundromat in Orlando, FL<br />Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      <div className="aboutpic-buttons">
      <button className="aboutpic-button1" onClick={() => window.location.href = "/contact"}>Visit Us</button>
      </div>
    </div>
  </section>
);

export const Aboutpic = () => (
  <section className="aboutpic-section">
    <div className="aboutpic-section-text">
      <div className="aboutpic-h2">
        <h2>About Advance Coin Laundry</h2>
      </div>
      <div className="aboutpic-h1">
        <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      </div>
      <div className="aboutpic-buttons">
        <button className="aboutpic-button1" onClick={() => window.location.href = "/contact"}>Visit Us</button>
      </div>
    </div>
  </section>
);

export const BusinessHours = () => (
  <div className="business-hours">
    <h1 className="business-hours-h1">Business Hours</h1>
    <div style={{height: "10px"}}></div>
    <p className="business-hours-p">Mon - Thu</p>
    <p className="business-hours-p">7:30 am - 10:00 pm</p>
    <div style={{height: "10px"}}></div>
    <p className="business-hours-p">Fri - Sun</p>
    <p className="business-hours-p">7:00 am - 10:00 pm</p>
  </div>
)

export const Services = () => (
  <div className="about-info-sections">
  <h1 className="about-info-h1">Services</h1>
  <p className="about-info-p">Dry Cleaning Services</p>
  <p className="about-info-p">Wash & Fold Services</p>
  <p className="about-info-p">Shoe Repair</p>
  <p className="about-info-p">Leather Repair</p>
  <p className="about-info-p">Washing Machines</p>
  <p className="about-info-p">Dryers</p>
</div>
)

export const Specialties = () => (
  <div className="about-info-sections">
    <h1 className="about-info-h1">Specialties</h1>
    <p className="about-info-p">Coin-Operated Washers and Dryers</p>
    <p className="about-info-p">Wash & Fold Services</p>
    <p className="about-info-p">Off-Site Dry Cleaning</p>
    <p className="about-info-p">Off-Site Shoe Repair</p>
    <p className="about-info-p">Off-Site Leather Repair</p>
</div>
)

export const PaymentTypes = () => (
  <div className="about-info-sections">
    <h1 className="about-info-h1">Payment Types</h1>
    <p className="about-info-p">American Express</p>
    <p className="about-info-p">Cash</p>
    <p className="about-info-p">Discover</p>
    <p className="about-info-p">MasterCard</p>
    <p className="about-info-p">Visa</p>
  </div>
)

export const BusinessAttributes = () => (
  <div className="about-info-sections">
    <h1 className="about-info-h1">Business Attributes</h1>
    <p className="about-info-p">Has restroom unisex</p>
    <p className="about-info-p">Has wheelchair accessible entrance</p>
    <p className="about-info-p">Has wheelchair accessible seating</p>
    <p className="about-info-p">Is transgender safespace</p>
    <p className="about-info-p">Welcomes lgbtq</p>
  </div>
)

export const SpeedQueenImg = () => (
  <div className="about-info-sections">
  <a href="https://speedqueenlaundry.com/app/"><img className="about-speedqueen-img" src="./speed_queen_app.png" alt="Speed Queen" /></a>
</div>
)

export const SpeedQueenText = () => (
  <div className="about-info-sections">
  <h1 className="about-info-h1">Speed Queen</h1>
  <p className="about-info-p" >The Speed Queen app provides laundromat customers with real-time machine availability, mobile payments, cycle monitoring, and a loyalty program to enhance the overall laundry experience.</p>
</div>
)

export const SpeedQueenTitle = () => (
  <section className="speedqueen-section">
    <div className="speedqueen-section-text">
      <div className="aboutpic-h2">
        <h2>Speed Queen Mobile App</h2>
      </div>
    </div>
  </section>
);

export const Coinmachine = () => (
  <section className="coinmachine-section">
    <div className="coinmachine-section-text">
      <div className="aboutpic-h2">
        <h2>Self-Service Washers and Dryers</h2>
      </div>
      <div className="aboutpic-h1">
        <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      </div>
      <div style={{height: "20px"}}></div>
      <div className="aboutpic-buttons">
        <button className="aboutpic-button1" onClick={() => window.location.href = "/contact"}>Visit Us</button>
      </div>
    </div>
  </section>
);

export const Washfold = () => (
  <section className="washfold-section">
    <div className="washfold-section-text">
      <div className="aboutpic-h2">
        <h2>Wash & Fold Services</h2>
      </div>
      <div className="aboutpic-h1">
        <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      </div>
      <div style={{height: "20px"}}></div>
      <div className="aboutpic-buttons">
        <button className="aboutpic-button1" onClick={() => window.location.href = "/contact"}>Visit Us</button>
      </div>
    </div>
  </section>
);

export const Dryclean = () => (
  <section className="dryclean-section">
    <div className="dryclean-section-text">
      <div className="aboutpic-h2">
        <h2>Dry Cleaning Services</h2>
      </div>
      <div className="aboutpic-h1">
        <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      </div>
      <div style={{height: "20px"}}></div>
      <div className="aboutpic-buttons">
        <button className="aboutpic-button1" onClick={() => window.location.href = "/contact"}>Visit Us</button>
      </div>
    </div>
  </section>
);