import React from 'react';
import './globalvideo.css';

const Video003 = () => {
  return (
    <div className="video-main">
      <div className="video-space"></div>
        <div className="video-title">
          <h1>The Framers’ Method 3/9: Origin Story: The Second Great Compromise</h1>
        </div>
        <div className="video-date">
          <p>06 Nov 2023</p>
        </div>
        <div className="video-iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xgopZgAcdfE?si=W5hN5yo_a-3aSouG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video-news-text">
          <p>The Framers’ Method is a political science education and reform-oriented channel. We want to inform and promote ideas that will defeat populism and tyranny as well as stabilize the American political system. It’s science, political science!</p>
        </div>
    </div>
  );
};

export default Video003;