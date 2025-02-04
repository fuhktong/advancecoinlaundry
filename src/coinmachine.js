import React from "react";
import "./components/sections.css";
import { Helmet } from "react-helmet-async";
import { CoinMachinePic } from "./components/mainpic.js";
import FooterContact from "./components/footer-contact";
import "./coinmachine.css";
import "./components/sections.css";

const CoinMachine = () => {
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
      <CoinMachinePic />
      <div
        className="text-section"
        style={{
          paddingTop: "50px",
          paddingBottom: "80px",
        }}
      >
        <div className="text-section-layer">
          <h1>Do Your Laundry in a Clean & Air Conditioned Environment</h1>
          <p>
            Doing your laundry at the laundromat doesn't need to feel like a
            tedious task. At Advance Coin Laundry, we guarantee a more pleasant
            experience. Our facility has been completely renovated, featuring
            brand-new washing machines and dryers, along with great air
            conditioning to keep you comfortable even during the hottest summer
            days.
          </p>
          <h3>Free Wi-Fi</h3>
          <h3>Stool Seating at the Folding Tables</h3>
          <h3>Air Conditioning</h3>
          <h3>Curb-less Entrance</h3>
          <h3>Automatic Sliding Doors</h3>
          <p>
            Our coin-operated machines can handle laundry loads ranging from 20
            to 80 pounds, with prices starting at $3.00 and going up to $12.50.
            If you need assistance operating the machines, our friendly and
            knowledgeable on-site attendant is available to help you out.
          </p>
          <p>
            With our Speed Queen Insights App, you can conveniently check
            machine availability either remotely or right in the store. Just
            select your machine by entering its number or scanning its QR code.
            After that, simply proceed by choosing your preferred settings, tap
            Continue, and press Start on the machine. Relax until the app alerts
            you when your laundry is nearing completion. Additionally, you'll
            earn reward points with every purchase, and your first $5.00 is
            complimentary!
          </p>
          <p>
            We offer free Wi-Fi for your enjoyment while you wait, and we warmly
            welcome pets! Our doors are open seven days a week to accommodate
            your schedule. Visit us today and discover a more enjoyable
            laundromat experience!
          </p>
          <h1>We have all the laundry supplies you need available on-site:</h1>
          <h3>Soaps and softeners</h3>
          <h3>Bleach and dryer sheets</h3>
          <h3>Laundry bags and hangers</h3>
          <h3>Drinks and snacks</h3>
        </div>
      </div>
      <FooterContact />
    </section>
  );
};

export default CoinMachine;
