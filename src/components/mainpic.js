import React from "react";
import "./mainpic.css";

export const HomePic = () => (
  <section className="mainpic-section homepic">
    <div className="mainpic-section-text">
      <h2>Advance Coin Laundry</h2>
      <h1>
        Laundromat in Orlando, FL
        <br />
        Attendant On-Site | All New Machines | Free Wi-Fi
      </h1>
      <button
        className="mainpic-button"
        onClick={() => (window.location.href = "/contact")}
      >
        Visit Us
      </button>
    </div>
  </section>
);

export const AboutPic = () => (
  <section className="mainpic-section aboutpic">
    <div className="mainpic-section-text">
      <h2>About Advance Coin Laundry</h2>
      <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      <button onClick={() => (window.location.href = "/contact")}>
        Visit Us
      </button>
    </div>
  </section>
);

export const CoinMachinePic = () => (
  <section className="mainpic-section coinmachinepic">
    <div className="mainpic-section-text">
      <h2>Self-Service Washers and Dryers</h2>
      <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      <button
        className="aboutpic-button1"
        onClick={() => (window.location.href = "/contact")}
      >
        Visit Us
      </button>
    </div>
  </section>
);

export const WashfoldPic = () => (
  <section className="mainpic-section washfoldpic">
    <div className="mainpic-section-text">
      <h2>Wash & Fold Services</h2>
      <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      <button onClick={() => (window.location.href = "/contact")}>
        Visit Us
      </button>
    </div>
  </section>
);

export const DrycleanPic = () => (
  <section className="mainpic-section drycleanpic">
    <div className="mainpic-section-text">
      <h2>Dry Cleaning Services</h2>
      <h1>Attendant On-Site | All New Machines | Free Wi-Fi</h1>
      <button onClick={() => (window.location.href = "/contact")}>
        Visit Us
      </button>
    </div>
  </section>
);

export const SpeedQueenPic = () => (
  <section className="mainpic-section speedqueenpic">
    <div className="mainpic-section-text">
      <h2>Speed Queen Mobile App</h2>
      <button onClick={() => (window.location.href = "/contact")}>
        Visit Us
      </button>
    </div>
  </section>
);
