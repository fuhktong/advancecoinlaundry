import React from 'react';
import './globalvideo.css';

const Video006 = () => {
  return (
    <div className="video-main">
      <div className="video-space"></div>
        <div className="video-title">
          <h1>The Framers’ Method 6/9: The Hamilton Method</h1>
        </div>
        <div className="video-date">
          <p>07 Dec 2023</p>
        </div>
        <div className="video-iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r9q_LkP1Aq4?si=0MteftHGwgFfx6aX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video-news-text">
          <p>The Hamilton Method will defeat the two-party system in the United States. Voters will be able to choose among many different parties. Most importantly, the Hamilton Method will prevent someone from winning a majority of electoral votes and force deliberation in an elector convention. <br/>The Framers’ Method is a political science education and reform-oriented channel. We want to inform and promote ideas that will defeat populism and tyranny as well as stabilize the American political system. It’s science, political science!</p>
        </div>
    </div>
  );
};

export default Video006;