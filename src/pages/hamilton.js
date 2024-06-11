import React from 'react';
import '../sections';
import { HamiltonHowitworks, HamiltonThehamiltonmethod, HamiltonKeypoints, SocialMediaBar } from '../sections';
import { Helmet } from 'react-helmet-async';

const Hamilton = () => {
  return (
    <section>
      <Helmet>
        <title>The Framers' Method - The Hamilton Method</title>
        <meta name="description" content="The Hamilton Method will give the United States multiple parties, decentralize our elections, and prevent national populist rhetoric." />
        <meta name="keywords" content="electoral college, presidential elections, american politics, electors, hamilton, president, constitution, multiple parties" />
        <meta name="author" content="Dustin Taylor" />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="The Framers' Method - The Hamilton Method" />
        <meta property="og:description" content="The Hamilton Method will give the United States multiple parties, decentralize our elections, and prevent national populist rhetoric." />
        <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta property="og:url" content="https://www.framersmethod.com/hamilton" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Framers' Method - The Hamilton Method" />
        <meta name="twitter:description" content="The Hamilton Method will give the United States multiple parties, decentralize our elections, and prevent national populist rhetoric." />
        <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        <div class="hamilton-logo">
            <img src="../hamilton method logo.png" alt="The Framers' Method Logo" />
        </div>
    <SocialMediaBar />
    <HamiltonHowitworks />
    <HamiltonThehamiltonmethod />
    <HamiltonKeypoints />
    </section>
  );
};

export default Hamilton;