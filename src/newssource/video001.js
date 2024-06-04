import React from 'react';
import './globalvideo.css';

const Video001 = () => {
  return (
    <div class="video-main">
      <div class="video-space"></div>
        <div class="video-title">
          <h1>The Framers’ Method 1/9: An Introduction to the Framers’ Method
          </h1>
        </div>
        <div class="video-date">
          <p>06 Nov 2023</p>
        </div>
        <div class="video-iframe-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_6jD8nm8QvM?si=9nSt3buSLvQirLo2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="video-news-text">
          <p>The Framers’ Method is a political science education and reform-oriented channel. We want to inform and promote ideas that will defeat populism and tyranny as well as stabilize the American political system. It’s science, political science!</p>
        </div>
    </div>
  );
};

export default Video001;