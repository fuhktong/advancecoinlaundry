import React from 'react';
import { HomeMainLogo, SocialMediaBar, HomeUnderstanding, HomeBringBackRepublic, HomeDeliberation, HomeVideo } from '../sections';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
    <Helmet>
      <title>The Framers' Method - Home</title>
      <meta name="description" content="The Framers' Method can defeat populism and tyranny by using the Electoral College and the Hamilton Method." />
      <meta name="keywords" content="electoral college, presidential elections, american politics, electors, republic, president, constitution, democracy" />
      <meta name="author" content="Dustin Taylor" />
      <meta name="robots" content="index, follow"></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>
      <meta property="og:title" content="The Framers' Method - Home" />
      <meta property="og:description" content="The Framers' Method can defeat populism and tyranny by using the Electoral College and the Hamilton Method." />
      <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
      <meta property="og:url" content="https://www.framersmethod.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="The Framers' Method - Home" />
      <meta name="twitter:description" content="The Framers' Method can defeat populism and tyranny by using the Electoral College and the Hamilton Method." />
      <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <HomeMainLogo />
    <SocialMediaBar />
    <HomeUnderstanding />
    <HomeBringBackRepublic />
    <HomeDeliberation />
    <HomeVideo />
    </div>
  );
};

export default Home;
