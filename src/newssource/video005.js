import React from 'react';
import './globalvideo.css';

const Video005 = () => {
  return (
    <div className="video-main">
      <div className="video-space"></div>
        <div className="video-title">
          <h1>The Framers’ Method 5/9: Tyranny of the Candidates</h1>
        </div>
        <div className="video-date">
          <p>25 Nov 2023</p>
        </div>
        <div className="video-iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d0AUNBIkLis?si=p4vGWDeHdNzXYlv5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video-news-text">
          <p>The Electoral College and the popular vote are one and the same. Both promote candidates to the national stage, where they use empty and populist rhetoric to control voters and win a majority. The Framers' Method prevents populism and tyranny.<br/>
          The Framers’ Method is a political science education and reform-oriented channel. We want to inform and promote ideas that will defeat populism and tyranny as well as stabilize the American political system. It’s science, political science!</p>
        </div>
    </div>
  );
};

export default Video005;