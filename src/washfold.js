import React from "react";
import "./components/sections";
import { WashfoldPic } from "./components/mainpic.js";
import { Helmet } from "react-helmet-async";
import FooterContact from "./components/footer-contact.js";

const WashFold = () => {
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
      <WashfoldPic />
      <div
        className="text-section"
        style={{ paddingTop: "50px", paddingBottom: "100px" }}
      >
        <div className="text-section-layer">
          <h1>Let our dependable team take care of your laundry needs.</h1>
          <p>
            Is your busy schedule making it hard to find time for laundry? Let
            Advance Coin Laundry take care of this essential chore for you! We
            offer same-day wash and fold services at competitive prices and can
            handle everything from jeans and shirts to comforters and pet beds!
          </p>
          <p>
            Rugs, pet beds, comforters, and heavy blankets should always be
            washed in a commercial facility. Visit us for all your washing and
            drying needs!
          </p>
          <h3>Wash & Fold Pricing (Minimum Services - $15.00)</h3>
          <h3>Two+ day service - $2.15 per pound</h3>
          <h3>Next-day service - $2.40 per pound</h3>
          <h3>Same-day service - $3.00 per pound</h3>
          <h3>Dry and fold service - $1.60 per pound</h3>
          <h3>Pressing is available upon request</h3>
        </div>
      </div>
      <FooterContact />
    </section>
  );
};

export default WashFold;
