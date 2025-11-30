<?php
include 'header/header.php';
include 'mainpic/mainpic.php';
include 'sections/sections.php';
include 'footer-contact/footer-contact.php';
?>

<link rel="stylesheet" href="/sections/sections.css">
<link rel="stylesheet" href="/mainpic/mainpic.css">
<link rel="stylesheet" href="/footer-contact/footer-contact.css">

<?php renderAboutPic(); ?>

<section>
    <div style="height: 80px;"></div>
    <div class="text-section">
        <div class="text-section-layer">
            <h1>About Us</h1>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Established in 2021, Advance Coin
                Laundry offers coin-operated washers and dryers, wash & fold
                services, and dry cleaning services in Orlando, FL. Completely
                renovated and air-conditioned, Advance Coin Laundry is the
                cleanest, coldest laundromat in Orlando! Visit us and download the
                new Speed Queen app and receive a $5 credit on your first-time
                use. Dry cleaning pick-up and drop off is on Tuesdays and
                Thursdays. Please note that last wash is at 8:55 PM daily. Check
                out our website for complete details.
            </p>
        </div>
        
        <?php renderBusinessHours(); ?>
        
        <div class="service-section-styles">
            <?php renderServices(); ?>
            <?php renderSpecialties(); ?>
        </div>
        
        <div class="service-section-styles">
            <?php renderPaymentTypes(); ?>
            <?php renderBusinessAttributes(); ?>
        </div>
        
        <div class="service-section-styles">
            <div class="text-section-layer">
                <div class="home-speedqueen-layer">
                    <?php renderSpeedQueenImg(); ?>
                    <?php renderSpeedQueenText(); ?>
                </div>
            </div>
        </div>
        
        <div style="height: 100px;"></div>
    </div>
</section>

<?php renderFooterContact(); ?>

<?php include 'footer/footer.php'; ?>