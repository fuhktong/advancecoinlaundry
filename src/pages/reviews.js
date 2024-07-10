import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import './reviews.js';

const CLIENT_ID = '897055066650-3mqhsvmpl6d45pjj1v195gcodj3fsp6m.apps.googleusercontent.com';
const ACCOUNT_ID = '12402228382401742046';
const LOCATION_ID = '7010744707';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/business.manage',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const authenticate = () => {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      fetchReviews();
    });
  };

  const fetchReviews = () => {
    gapi.client.load('https://content.googleapis.com/discovery/v1/apis/mybusiness/v4/rest')
      .then(() => {
        return gapi.client.mybusiness.accounts.locations.reviews.list({
          parent: `accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}`
        });
      })
      .then(response => {
        setReviews(response.result.reviews || []);
      }, err => {
        console.error('Error fetching reviews', err);
      });
  };

  return (
    <div className="app">
      <button onClick={authenticate}>Sign In with Google</button>
      <div>
        {reviews.map(review => (
          <div key={review.name}>
            <h3>{review.reviewer.displayName}</h3>
            <p>{review.comment}</p>
            <p>Rating: {review.starRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;