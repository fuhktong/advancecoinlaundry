import React from "react";
import styled from "styled-components";
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
);

export const SpaceDivider = () => <div className="spacedivider"></div>;

export const SpaceDividerSmall = () => (
  <div className="spacedividersmall"></div>
);

export const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

export const BusinessHours = () => (
  <div className="text-section">
    <div className="text-section-layer">
      <h1>Business Hours</h1>
      <p>Mon - Thu</p>
      <p>7:30 am - 10:00 pm</p>
      <p>Fri - Sun</p>
      <p>7:00 am - 10:00 pm</p>
    </div>
  </div>
);

export const Services = () => (
  <div className="text-section">
    <div className="text-section-layer">
      <h1>Services</h1>
      <p>Dry Cleaning Services</p>
      <p>Wash & Fold Services</p>
      <p>Shoe Repair</p>
      <p>Leather Repair</p>
      <p>Washing Machines</p>
      <p>Dryers</p>
    </div>
  </div>
);

export const Specialties = () => (
  <div className="text-section">
    <div className="text-section-layer">
      <h1>Specialties</h1>
      <p>Coin-Operated Washers and Dryers</p>
      <p>Wash & Fold Services</p>
      <p>Off-Site Dry Cleaning</p>
      <p>Off-Site Shoe Repair</p>
      <p>Off-Site Leather Repair</p>
    </div>
  </div>
);

export const PaymentTypes = () => (
  <div className="text-section">
    <div className="text-section-layer">
      <h1>Payment Types</h1>
      <p>American Express</p>
      <p>Cash</p>
      <p>Discover</p>
      <p>MasterCard</p>
      <p>Visa</p>
    </div>
  </div>
);

export const BusinessAttributes = () => (
  <div className="text-section">
    <div className="text-section-layer">
      <h1>Business Attributes</h1>
      <p>Has restroom unisex</p>
      <p>Has wheelchair accessible entrance</p>
      <p>Has wheelchair accessible seating</p>
      <p>Is transgender safespace</p>
      <p>Welcomes lgbtq</p>
    </div>
  </div>
);

export const SpeedQueenImg = () => (
  <div className="text-section">
    <a
      href="https://speedqueenlaundry.com/app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="about-speedqueen-img"
        src="./speed_queen_app.png"
        alt="Speed Queen"
      />
    </a>
  </div>
);

export const SpeedQueenText = () => (
  <div className="text-section">
    <h1>Speed Queen</h1>
    <p>
      The Speed Queen app provides laundromat customers with real-time machine
      availability, mobile payments, cycle monitoring, and a loyalty program to
      enhance the overall laundry experience.
    </p>
  </div>
);
