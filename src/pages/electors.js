import React from 'react';
import '../sections.css';
import { ElectorsKeypoints, ElectorsText, SocialMediaBar } from '../sections';

const Electors = () => {
  return (
    <section>
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