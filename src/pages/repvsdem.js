import React from 'react';
import { Democracy, Republic, DemocracyVsRepublic, SocialMediaBar } from '../sections';
import '../sections.css';

const RepVsDem = () => {
  return (
    <section>
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