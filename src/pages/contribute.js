import React from 'react';
import '../sections.css';
import { ContributeLogo, ContributePatreon, ContributeShortSleeve, ContributeVneck, ContributeDeepState, SocialMediaBar } from '../sections';

const Contribute = () => {
  return (
    <section>
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