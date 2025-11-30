<?php
function renderGoogleReviews() {
    // You'll need to replace these with your actual API key and place ID
    $googleApiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    $placeId = 'YOUR_PLACE_ID';
?>
    <div class="reviews-container">
        <div style="height: 30px;"></div>
        <h1>Advance Coin Laundry Reviews</h1>
        <div id="reviewsContent">
            <div id="loadingMessage">Loading reviews...</div>
        </div>
        <button id="loadMoreButton" class="load-more-button" style="display: none;">
            Load More Reviews
        </button>
    </div>

    <script>
        let allReviews = [];
        let displayedReviews = [];
        const reviewsPerPage = 10;

        function initReviews() {
            const loadingMessage = document.getElementById('loadingMessage');
            
            // Check if Google Maps API loaded
            if (typeof google === 'undefined' || !google.maps || !google.maps.places) {
                loadingMessage.innerHTML = 'Google Maps API failed to load. Please check your API key.';
                return;
            }

            try {
                const service = new google.maps.places.PlacesService(document.createElement('div'));
                
                service.getDetails({
                    placeId: '<?php echo $placeId; ?>',
                    fields: ['reviews', 'name', 'rating']
                }, (place, status) => {
                    console.log('Places API Status:', status);
                    console.log('Place data:', place);
                    
                    const reviewsContent = document.getElementById('reviewsContent');
                    
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        if (place.reviews && place.reviews.length > 0) {
                            allReviews = place.reviews;
                            displayedReviews = allReviews.slice(0, reviewsPerPage);
                            
                            loadingMessage.style.display = 'none';
                            renderReviews();
                            
                            if (allReviews.length > reviewsPerPage) {
                                document.getElementById('loadMoreButton').style.display = 'block';
                            }
                        } else {
                            loadingMessage.innerHTML = 'No reviews available for this location.';
                        }
                    } else {
                        let errorMsg = 'Error loading reviews: ';
                        switch(status) {
                            case google.maps.places.PlacesServiceStatus.INVALID_REQUEST:
                                errorMsg += 'Invalid place ID or request.';
                                break;
                            case google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT:
                                errorMsg += 'API quota exceeded.';
                                break;
                            case google.maps.places.PlacesServiceStatus.REQUEST_DENIED:
                                errorMsg += 'API request denied. Check API key permissions.';
                                break;
                            case google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR:
                                errorMsg += 'Unknown error occurred.';
                                break;
                            default:
                                errorMsg += status;
                        }
                        loadingMessage.innerHTML = errorMsg;
                    }
                });
            } catch (error) {
                console.error('Error initializing reviews:', error);
                loadingMessage.innerHTML = 'Failed to initialize Google Places service.';
            }
        }

        // Fallback if API fails to load
        window.setTimeout(() => {
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage && loadingMessage.innerHTML === 'Loading reviews...') {
                loadingMessage.innerHTML = 'Unable to load reviews. API may be unavailable.';
            }
        }, 10000); // 10 second timeout

        function renderReviews() {
            const reviewsContent = document.getElementById('reviewsContent');
            reviewsContent.innerHTML = '';
            
            displayedReviews.forEach((review, index) => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review';
                reviewDiv.innerHTML = `
                    <p><strong>${review.author_name}</strong></p>
                    <p>Rating: ${review.rating} / 5</p>
                    <p>${review.text}</p>
                `;
                reviewsContent.appendChild(reviewDiv);
            });
        }

        function loadMoreReviews() {
            const currentLength = displayedReviews.length;
            const nextReviews = allReviews.slice(currentLength, currentLength + reviewsPerPage);
            displayedReviews = [...displayedReviews, ...nextReviews];
            
            renderReviews();
            
            if (displayedReviews.length >= allReviews.length) {
                document.getElementById('loadMoreButton').style.display = 'none';
            }
        }

        document.getElementById('loadMoreButton').addEventListener('click', loadMoreReviews);
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=<?php echo $googleApiKey; ?>&libraries=places&callback=initReviews"></script>
<?php
}
?>