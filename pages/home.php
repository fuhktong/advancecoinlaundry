<?php
include 'header/header.php';
include 'scrolling-banner/scrolling-banner.php';
include 'mainpic/mainpic.php';
include 'sections/sections.php';
include 'carousel/carousel.php';
include 'footer-contact/footer-contact.php';
?>

<link rel="stylesheet" href="/pages/home.css">
<link rel="stylesheet" href="/mainpic/mainpic.css">
<link rel="stylesheet" href="/scrolling-banner/scrolling-banner.css">
<link rel="stylesheet" href="/sections/sections.css">
<link rel="stylesheet" href="/carousel/carousel.css">
<link rel="stylesheet" href="/footer-contact/footer-contact.css">

<?php renderScrollingBanner(); ?>
<?php renderHomePic(); ?>

<div class="text-section" style="padding-top: 50px; padding-bottom: 50px;">
    <div class="text-section-layer">
        <h1>Do Your Laundry in a Clean & Air Conditioned Environment</h1>
        <div style="height: 30px;"></div>
        <p>
            Are you looking for a better laundromat experience? Visit Advance
            Coin Laundry for just that! Our facility has been completely
            renovated with brand-new washers and dryers.
        </p>
        <div style="height: 20px;"></div>
        <p>
            Need dry cleaning? We can help. Contact us for more information. Our
            on-site attendants are always ready to assist you with any needs.
        </p>
        <div style="height: 20px;"></div>
        <p>
            Pressed for time? Take advantage of our same-day, next-day, and
            standard wash and fold services, along with a customer loyalty
            program for regular users. We also offer pressing services and dry &
            fold options for those who prefer washing their clothes but don't
            want to handle drying and folding.
        </p>
    </div>
</div>

<?php renderCarousel(); ?>

<div class="text-section home-speedqueen" style="padding-top: 100px; padding-bottom: 100px;">
    <div class="text-section-layer">
        <div class="home-speedqueen-layer">
            <div>
                <?php renderSpeedQueenImg(); ?>
            </div>
            <div>
                <?php renderSpeedQueenText(); ?>
            </div>
        </div>
    </div>
</div>

<?php renderFooterContact(); ?>

<?php include 'footer/footer.php'; ?>