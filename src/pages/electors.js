import React from 'react';
import '../sections.css';
import { ElectorsKeypoints, ElectorsText, SocialMediaBar } from '../sections';
import { Helmet } from 'react-helmet-async';

const Electors = () => {
  return (
    <section>
      <Helmet>
        <title>The Framers' Method - Electors Convention</title>
        <meta name="description" content="An electors convention will give America the president it needs for the future." />
        <meta name="keywords" content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution, convention, electors convention" />
        <meta name="author" content="Dustin Taylor" />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="The Framers' Method - Electors Convention" />
        <meta property="og:description" content="An electors convention will give America the president it needs for the future." />
        <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta property="og:url" content="https://www.framersmethod.com/electors" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Framers' Method - Electors Convention" />
        <meta name="twitter:description" content="An electors convention will give America the president it needs for the future." />
        <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div class="electorslogo">
        <img src="../electors convention logo.png" alt="Electors Convention Logo" /><br></br>
      </div>
      <SocialMediaBar />
      <ElectorsText />
      <ElectorsKeypoints />
    </section>
  );
};

export default Electors;