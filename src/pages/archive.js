import React from 'react';
import { DividerWhite, LogoOnly } from '../sections.js';
import { Link } from 'react-router-dom';
import '../sections.js';

const Archive = () => {
  return (
    <section>
      <LogoOnly />
      <DividerWhite />
        <div className="archive">Archive</div>
      <DividerWhite />
        <div className="archive-dates">
          <div className="archive-months">November 2023</div>
          <Link className="archive-title" to="/video001">Video: The Framers’ Method 1/9: An Introduction to the Framers’ Method</Link>
      </div>
      <DividerWhite />
    </section>
  );
};

export default Archive;