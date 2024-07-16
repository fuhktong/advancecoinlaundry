import React from 'react';
import '../sections.css';
import { Aboutpic, BusinessHours, Services, Specialties, PaymentTypes, BusinessAttributes, SpeedQueenImg, SpeedQueenText, Footer2 } from '../sections';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <section>
      <Helmet>
        <title>Advance Coin Laundry - Orlando, Florida Laundrymat</title>
        <meta name="description" content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL." />
        <meta name="keywords" content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution, convention, electors convention" />
        <meta name="author" content="Advance Coin Laundry" />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="Advance Coin Laundry - About" />
        <meta property="og:description" content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL." />
        <meta property="og:image" content="https://www.advancecoinlaundry.com/public/advance_coin_laundry_logo_2.png" />
        <meta property="og:url" content="https://www.advancecoinlaundry.com/about/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Advance Coin Laundry - About" />
        <meta name="twitter:description" content="Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL." />
        <meta name="twitter:image" content="https://www.advancecoinlaundry.com/public/advance_coin_laundry_logo_2.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Aboutpic />
      <section className="about-info">
        <div className="about-info-column">
          <h1 className="about-info-h1-title">About Us</h1>
          <p className="about-info-about">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Established in 2021, Advance Coin Laundry offers coin-operated washers and dryers, wash & fold services, and dry cleaning services in Orlando, FL. Completely renovated and air-conditioned, Advance Coin Laundry is the cleanest, coldest laundromat in Orlando! Visit us and download the new Speed Queen app and receive a $5 credit on your first-time use. Dry cleaning pick-up and drop off is on Tuesdays and Thursdays. Please note that last wash is at 8:55 PM daily. Check out our website for complete details.</p>
          <div style={{height: "50px"}}></div>
            <BusinessHours />
          <div style={{height: "50px"}}></div>
          <div className="service-section-styles">
            <Services />
            <Specialties />
          </div>
          <div style={{height: "50px"}}></div>
          <div className="service-section-styles">
          <PaymentTypes />
          <BusinessAttributes />
          </div>
          <div style={{height: "50px"}}></div>
          <div className="service-section-styles">
          <SpeedQueenImg />
          <SpeedQueenText />
          </div>
          <div style={{height: "100px"}}></div>
          <Footer2 />
        </div>
      </section>
    </section>
  );
};

export default About;