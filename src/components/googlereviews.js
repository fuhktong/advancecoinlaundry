//THIS CODE WORKS BUT ONLY 5 REVIEWS
import React, { useState, useEffect } from "react";
import { LoadScript } from "@react-google-maps/api";
import "./googlereviews.css";

const ReviewsContent = ({ API_KEY, PLACE_ID }) => {
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const reviewsPerPage = 10;

  useEffect(() => {
    const fetchReviews = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ["reviews"],
        },
        (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setReviews(place.reviews);
            setDisplayedReviews(place.reviews.slice(0, reviewsPerPage));
          } else {
            setError(`Error fetching reviews: ${status}`);
          }
          setLoading(false);
        }
      );
    };

    if (window.google && window.google.maps) {
      fetchReviews();
    } else {
      setError("Google Maps API not loaded");
      setLoading(false);
    }
  }, [PLACE_ID]);

  const loadMoreReviews = () => {
    const currentLength = displayedReviews.length;
    const nextReviews = reviews.slice(
      currentLength,
      currentLength + reviewsPerPage
    );
    setDisplayedReviews([...displayedReviews, ...nextReviews]);
  };

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="reviews-container">
      <div style={{ height: "30px" }}></div>
      <h1>Advance Coin Laundry Reviews</h1>
      {displayedReviews.length > 0 ? (
        <>
          {displayedReviews.map((review, index) => (
            <div key={index} className="review">
              <p>
                <strong>{review.author_name}</strong>
              </p>
              <p>Rating: {review.rating} / 5</p>
              <p>{review.text}</p>
            </div>
          ))}
          {displayedReviews.length < reviews.length && (
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
  const PLACE_ID = process.env.REACT_APP_LOCATION_ID;

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
      <ReviewsContent API_KEY={API_KEY} PLACE_ID={PLACE_ID} />
    </LoadScript>
  );
};

export default GoogleReviews;
