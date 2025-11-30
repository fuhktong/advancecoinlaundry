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
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            
            service.getDetails({
                placeId: '<?php echo $placeId; ?>',
                fields: ['reviews']
            }, (place, status) => {
                const loadingMessage = document.getElementById('loadingMessage');
                const reviewsContent = document.getElementById('reviewsContent');
                
                if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews) {
                    allReviews = place.reviews;
                    displayedReviews = allReviews.slice(0, reviewsPerPage);
                    
                    loadingMessage.style.display = 'none';
                    renderReviews();
                    
                    if (allReviews.length > reviewsPerPage) {
                        document.getElementById('loadMoreButton').style.display = 'block';
                    }
                } else {
                    loadingMessage.innerHTML = 'Error loading reviews or no reviews available.';
                }
            });
        }

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