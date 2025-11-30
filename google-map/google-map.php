<?php
function renderAdvanceMap() {
    // You'll need to replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
    $googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
?>
    <div class="map-container">
        <div class="map-link">
            <a href="https://maps.app.goo.gl/PXH87qQesxWAWqbKA" target="_blank" rel="noopener noreferrer">
                Click here to view Advance Coin Laundry in Google Maps
            </a>
        </div>
        <div id="googleMap" style="width: 90%; height: 600px; margin: 0 auto;"></div>
    </div>

    <script>
        function initMap() {
            const location = { lat: 28.480998849569467, lng: -81.30726034319346 };
            
            const map = new google.maps.Map(document.getElementById("googleMap"), {
                zoom: 12,
                center: location,
            });
            
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: "Advance Coin Laundry"
            });
        }
    </script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=<?php echo $googleMapsApiKey; ?>&callback=initMap"></script>
<?php
}
?>