import React from 'react';
import '../sections.css';
import { ContributeLogo, ContributePatreon, ContributeShortSleeve, ContributeVneck, ContributeDeepState, SocialMediaBar } from '../sections';
import { Helmet } from 'react-helmet-async';

const Contribute = () => {
  return (
    <section>
      <Helmet>
        <title>The Framers' Method - Contribute</title>
        <meta name="description" content="Contribute to the Framers' Method by supporting us on Patreon or buying one of our t-shirts. Help defeat populism and tyrannically-minded politicians." />
        <meta name="keywords" content="electoral college, presidential elections, american politics, electors, electoral votes, president, constitution, patreon, printify" />
        <meta name="author" content="Dustin Taylor" />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta property="og:title" content="The Framers' Method - Contribute" />
        <meta property="og:description" content="Contribute to the Framers' Method by supporting us on Patreon or buying one of our t-shirts. Help defeat populism and tyrannically-minded politicians." />
        <meta property="og:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta property="og:url" content="https://www.framersmethod.com/contribute" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Framers' Method - Contribute" />
        <meta name="twitter:description" content="Contribute to the Framers' Method by supporting us on Patreon or buying one of our t-shirts. Help defeat populism and tyrannically-minded politicians." />
        <meta name="twitter:image" content="https://www.framersmethod.com/framers%20method%20tshirt.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ContributeLogo />
      <SocialMediaBar />
      <ContributePatreon />
      <div class="contribute-merch">The Framers' Method - Merch</div>
      <ContributeShortSleeve />
      <ContributeVneck />
      <ContributeDeepState />
    </section>

  );
};

export default Contribute;