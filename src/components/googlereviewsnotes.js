/*
import React, { useState } from 'react';
import axios from 'axios';
import './googlereviews.css';

const ReviewsContent = ({ API_KEY, LOCATION_ID }) => {
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const reviewsPerPage = 10;  
  console.log('API_KEY:', API_KEY);
  console.log('LOCATION_ID:', LOCATION_ID);

  const fetchReviews = async (pageToken = '') => {
    try {
      const response = await axios.get(
        `https://mybusiness.googleapis.com/v4/accounts/12402228382401742046/locations/${LOCATION_ID}/reviews`,
        {
          params: {
            pageSize: reviewsPerPage,
            pageToken: pageToken,
          },
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      console.log('API Response:', response);

      const newReviews = response.data.reviews || [];
      setDisplayedReviews(prevDisplayed => [...prevDisplayed, ...newReviews]);
      setNextPageToken(response.data.nextPageToken);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError(`Error fetching reviews: ${err.message}`);
      setLoading(false);
    }
  };

  const loadMoreReviews = () => {
    if (nextPageToken) {
      fetchReviews(nextPageToken);
    }
  };

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="reviews-container">
      <h1>Advance Coin Laundry Reviews</h1>
      {displayedReviews.length > 0 ? (
        <>
          {displayedReviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.reviewer.displayName}</strong></p>
              <p>Rating: {review.starRating} / 5</p>
              <p>{review.comment}</p>
            </div>
          ))}
          {nextPageToken && (
            <button onClick={loadMoreReviews} className="load-more-button">
              Load More Reviews
            </button>
          )}
        </>
      ) : (
        <p>No reviews available at the moment.</p>
      )}
    </div>
  );
};

const GoogleReviews = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_BUSINESS_API_KEY;
  const LOCATION_ID = process.env.REACT_APP_LOCATION_ID;

  return <ReviewsContent API_KEY={API_KEY} LOCATION_ID={LOCATION_ID} />;
};

export default GoogleReviews;
*/