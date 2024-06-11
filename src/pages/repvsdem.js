import React from 'react';
import { Democracy, Republic, DemocracyVsRepublic, SocialMediaBar } from '../sections';
import '../sections.css';
import { Helmet } from 'react-helmet-async';

const RepVsDem = () => {
  return (
    <section>
      <Helmet>
        <title>The Framers' Method - A Republic vs a Democracy</title>
        <meta name="description" content="What is the difference between a republic and a democracy? Find out at the Framers' Method." />
        <meta name="keywords" content="electoral college, presidential elections, american politics, electors, republic, president, constitution, democracy" />
        <meta name="author" content="Dustin Taylor" />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="The Framers' Method - A Republic vs a Democracy" />
        <meta property="og:description" content="What is the difference between a republic and a democracy? Find out at the Framers' Method." />
        <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta property="og:url" content="https://www.framersmethod.com/repvsdem" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Framers' Method - A Republic vs a Democracy" />
        <meta name="twitter:description" content="What is the difference between a republic and a democracy? Find out at the Framers' Method." />
        <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <div className="repvsdem-logo">
            <img src="../rep vs dem logo.png" alt="Republic versus Democracy" />
        </div>
        <SocialMediaBar />
        <Democracy />
        <Republic />
        <DemocracyVsRepublic />
    </section>
  );
};

export default RepVsDem;