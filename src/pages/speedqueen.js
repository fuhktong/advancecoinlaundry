import React from 'react';
import '../sections.css';
import { Helmet } from 'react-helmet-async';
import { Footer2, SpeedQueenTitle } from '../sections';

const SpeedQueen = () => (
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
    <SpeedQueenTitle />
    <div className="speedqueen-text">    
      <div className="speedqueen-description">
      <p>Speed Queen is a laundry machine manufacturer based in Ripon, Wisconsin, USA. It is a subsidiary of Alliance Laundry Systems LLC, which claimed to be the world's largest manufacturer of commercial laundry equipment as of 2004.</p>
      </div>
      <div className="speedqueen-description">
        <p>Introducing the Speed Queen mobile app: Earn rewards, get notified when your machine cycle is complete, pay for your washer or dryer, and more — all in one convenient place. Learn more about the Speed Queen mobile app and start saving time and earning rewards today.</p></div>
    </div>
    <div className="speedqueen-block">
      <div className="speedqueen-block-2">
        <div className="speedqueen-img"><a href="https://speedqueenlaundry.com/app/"><img  src="./speedqueen1.png" alt="Speed Queen"/></a></div>
        <div className="speedqueen-img"><a href="https://speedqueenlaundry.com/app/"><img  src="./speedqueen2.png" alt="Speed Queen"/></a></div>
      </div>
      <div className="speedqueen-block-2">
        <div className="speedqueen-img"><a href="https://speedqueenlaundry.com/app/"><img src="./speedqueen3.png" alt="Speed Queen"/></a></div>
        <div className="speedqueen-img"><a href="https://speedqueenlaundry.com/app/"><img src="./speedqueen4.png" alt="Speed Queen"/></a></div>
      </div>
    </div>
    <p className="speedqueen-p">Download the Speed Queen App on your mobile device:</p>
    <div className="speenqueen-app-links">
      <div className="speedqueen-app-img"><a href="https://apps.apple.com/us/app/speed-queen/id1235121730"><img  src="./apple_button.svg" alt="Speed Queen - Apple Store"/></a></div>
      <div className="speedqueen-app-img"><a href="https://play.google.com/store/apps/details?id=com.alliancelaundry.app.speedqueen&pcampaignid=web_share"><img  src="./google_play_button.svg" alt="Speed Queen - Google Play"/></a></div>
    </div>
    <Footer2 />
  </section>
);

export default SpeedQueen;