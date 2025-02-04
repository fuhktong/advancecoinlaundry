import React from "react";
import "./components/sections.css";
import { AboutPic } from "./components/mainpic";
import {
  BusinessHours,
  Services,
  Specialties,
  PaymentTypes,
  BusinessAttributes,
  SpeedQueenImg,
  SpeedQueenText,
} from "./components/sections.js";
import { Helmet } from "react-helmet-async";
import FooterContact from "./components/footer-contact";

const About = () => {
  return (
    <section>
      <Helmet>
        <title>Advance Coin Laundry - Orlando, Florida Laundrymat</title>
        <meta
          name="description"
          content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
        />
        <meta
          name="keywords"
          content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution, convention, electors convention"
        />
        <meta name="author" content="Advance Coin Laundry" />
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="Advance Coin Laundry - About" />
        <meta
          property="og:description"
          content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
        />
        <meta
          property="og:image"
          content="https://www.advancecoinlaundry.com/public/advance_coin_laundry_logo_2.png"
        />
        <meta
          property="og:url"
          content="https://www.advancecoinlaundry.com/about/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Advance Coin Laundry - About" />
        <meta
          name="twitter:description"
          content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL."
        />
        <meta
          name="twitter:image"
          content="https://www.advancecoinlaundry.com/public/advance_coin_laundry_logo_2.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <AboutPic />
      <section>
        <div style={{ height: "80px" }}></div>
        <div className="text-section">
          <div className="text-section-layer">
            <h1>About Us</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Established in 2021, Advance Coin
              Laundry offers coin-operated washers and dryers, wash & fold
              services, and dry cleaning services in Orlando, FL. Completely
              renovated and air-conditioned, Advance Coin Laundry is the
              cleanest, coldest laundromat in Orlando! Visit us and download the
              new Speed Queen app and receive a $5 credit on your first-time
              use. Dry cleaning pick-up and drop off is on Tuesdays and
              Thursdays. Please note that last wash is at 8:55 PM daily. Check
              out our website for complete details.
            </p>
          </div>
          <BusinessHours />
          <div className="service-section-styles">
            <Services />
            <Specialties />
          </div>
          <div className="service-section-styles">
            <PaymentTypes />
            <BusinessAttributes />
          </div>
          <div className="service-section-styles">
            <div className="text-section-layer">
              <div className="home-speedqueen-layer">
                <SpeedQueenImg />
                <SpeedQueenText />
              </div>
            </div>
          </div>
          <div style={{ height: "100px" }}></div>
        </div>
      </section>
      <FooterContact />
    </section>
  );
};

export default About;
