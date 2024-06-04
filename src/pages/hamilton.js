import React from 'react';
import '../sections';
import { HamiltonHowitworks, HamiltonThehamiltonmethod, HamiltonKeypoints, SocialMediaBar } from '../sections';

const Hamilton = () => {
  return (
    <section>
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