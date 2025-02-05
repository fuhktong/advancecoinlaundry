import React, { useState } from "react";
import "./home-page-popup.css";

const HomePagePopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };

  return (
    showPopup && (
      <div
        className={`popup-overlay ${isClosing ? "closing" : ""}`}
        onClick={closePopup}
      >
        <div className={`popup-content ${isClosing ? "closing" : ""}`}>
          <div className="popup-content-layer">
            <h1>Advance Coin Laundry will reopen:</h1>
            <p>Friday, October 11th, due to hurricane Milton</p>
            <a
              href="https://www.google.com/search?q=Hurricane+Milton+news"
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              ⚠️HURRICANE MILTON NEWS⚠️
            </a>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default HomePagePopup;
