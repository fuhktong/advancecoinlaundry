import React from 'react';
import '../sections.css';
import { Dryclean, Footer2 } from '../sections';
import { Helmet } from 'react-helmet-async';

const Electors = () => {
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
      <Dryclean />
      <div style={{height: "30px"}}></div>
      <h1 className="washfold-h1-title">Meeting Your High Standards for Dry Cleaning</h1>
      <div style={{height: "50px"}}></div>
      <p className="washfold-p">Do you have clothes that need dry cleaning? Count on Advance Coin Laundry to assist you. While we don't handle dry cleaning ourselves, we partner with the best local dry cleaners who meet your high standards for quality.</p>
      <div style={{height: "20px"}}></div>
      <p className="washfold-p">Just drop off your clothes anytime during the week, and we'll take care of delivering and retrieving them from the dry cleaners on either Tuesday or Thursday, whichever comes first. Our locally owned, family, and veteran-operated business aims to be your one-stop solution for all your laundry needs!</p>
      <div style={{height: "20px"}}></div>
      <p className="washfold-p">To learn more about this convenient option, please contact us today.</p>
      <div style={{height: "50px"}}></div>
      <Footer2 />
    </section>
  );
};

export default Electors;