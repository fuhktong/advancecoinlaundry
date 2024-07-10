import React from 'react';
import { Footer2, HomePage, SpeedQueenImg, SpeedQueenText } from '../sections';
import { Helmet } from 'react-helmet-async';
import CarouselComponent from '../CarouselComponent';

const Home = () => {
  return (
    <div>
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
    <HomePage />
    <div style={{height: "50px"}}></div>
    <h1 className="homepage-h1-title">Do Your Laundry in a Clean & Air Conditioned Environment</h1>
    <div style={{height: "30px"}}></div>
    <p className="homepage-p">Are you looking for a better laundromat experience? Visit Advance Coin Laundry for just that! Our facility has been completely renovated with brand-new washers and dryers.</p>
    <div style={{height: "20px"}}></div>
    <p className="homepage-p">Need dry cleaning? We can help. Contact us for more information. Our on-site attendants are always ready to assist you with any needs.</p>
    <div style={{height: "20px"}}></div>
    <p className="homepage-p">Pressed for time? Take advantage of our same-day, next-day, and standard wash and fold services, along with a customer loyalty program for regular users. We also offer pressing services and dry & fold options for those who prefer washing their clothes but don't want to handle drying and folding.</p>
    <div style={{height: "60px"}}></div>

    <div class="carousel-border"></div>
    <CarouselComponent />
    <div class="carousel-border"></div>
    
    <div style={{height: "50px"}}></div>
    <div className="service-section-styles">
      <SpeedQueenImg />
      <SpeedQueenText />
    </div>
    <div style={{height: "50px"}}></div>
    <Footer2 />
    </div>
  );
};

export default Home;