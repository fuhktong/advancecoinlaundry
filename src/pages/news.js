import React from 'react';
import { Link } from 'react-router-dom';
import '../sections.css';

export const News = () => (
  <section>
    <section className="sectiontemplate" style={{paddingTop: "150px"}}>
      <div className="sectiontemplate-text">
        <div className="sectiontemplate-text-h1">Video - The Framers’ Method 1/9: An Introduction to the Framers’ Method </div>
        <div className="sectiontemplate-text-p">06 Nov 2023</div>
      </div>
      <div class="sectiontemplate-img">
        <Link to="/video001">
        <img src="framers method thumbnail.png" alt="The Framers' Method Logo" />
        </Link>
      </div>
    </section>
  </section>
);

export default News;