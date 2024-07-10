import React from 'react';
import '../sections';
import { Washfold, Footer2, DividerWhite } from '../sections';
import { Helmet } from 'react-helmet-async';

const WashFold = () => {
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
      <Washfold />
      <div style={{height: "30px"}}></div>
      <h1 className="washfold-h1-title">Let our dependable team take care of your laundry needs.</h1>
      <div style={{height: "50px"}}></div>
      <p className="washfold-p">Is your busy schedule making it hard to find time for laundry? Let Advance Coin Laundry take care of this essential chore for you! We offer same-day wash and fold services at competitive prices and can handle everything from jeans and shirts to comforters and pet beds!</p>
      <div style={{height: "20px"}}></div>
      <p className="washfold-p">Rugs, pet beds, comforters, and heavy blankets should always be washed in a commercial facility. Visit us for all your washing and drying needs!</p>
      <div style={{height: "50px"}}></div>
      <DividerWhite />
      <h1 className="washfold-h1-title">Wash & Fold Pricing (Minimum Services - $15.00)</h1>
      <div style={{height: "20px"}}></div>
      <p className="washfold-p">Two+ day service - $2.15 per pound</p>
      <p className="washfold-p">Next-day service - $2.40 per pound</p>
      <p className="washfold-p">Same-day service - $3.00 per pound</p>
      <p className="washfold-p">Dry and fold service - $1.60 per pound</p>
      <p className="washfold-p">Pressing is available upon request</p>
      <div style={{height: "100px"}}></div>
      <Footer2 />
    </section>
  );
};

export default WashFold;