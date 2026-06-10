<?php
function getCurrentPageTitle($request) {
    $titles = [
        '' => 'Advance Coin Laundry - Best Laundromat in Orlando',
        '/' => 'Advance Coin Laundry - Best Laundromat in Orlando',
        '/about' => 'About Us - Advance Coin Laundry',
        '/coinmachine' => 'Coin-Operated Machines - Advance Coin Laundry',
        '/washfold' => 'Wash & Fold Service - Advance Coin Laundry',
        '/dryclean' => 'Dry Cleaning Service - Advance Coin Laundry',
        '/speedqueen' => 'Speed Queen App - Advance Coin Laundry',
        '/contact' => 'Contact Us - Advance Coin Laundry',
        '/reviews' => 'Customer Reviews - Advance Coin Laundry',
        '/privacy-policy' => 'Privacy Policy - Advance Coin Laundry',
        '/terms-of-service' => 'Terms of Service - Advance Coin Laundry'
    ];
    return isset($titles[$request]) ? $titles[$request] : 'Advance Coin Laundry';
}

function getCurrentPageDescription($request) {
    $descriptions = [
        '' => 'Orlando\'s premier laundromat with brand new Speed Queen washers and dryers, wash & fold service, dry cleaning, and air conditioning. Clean, safe, and convenient.',
        '/' => 'Orlando\'s premier laundromat with brand new Speed Queen washers and dryers, wash & fold service, dry cleaning, and air conditioning. Clean, safe, and convenient.',
        '/about' => 'Learn about Advance Coin Laundry, Orlando\'s cleanest and most modern laundromat featuring new Speed Queen equipment and excellent customer service.',
        '/coinmachine' => 'State-of-the-art coin-operated Speed Queen washing machines and dryers at Advance Coin Laundry in Orlando. Fast, efficient, and reliable.',
        '/washfold' => 'Professional wash and fold service at Advance Coin Laundry. Same-day and next-day service available with customer loyalty program.',
        '/dryclean' => 'Quality dry cleaning services at Advance Coin Laundry in Orlando. Expert care for your delicate garments and professional attire.',
        '/speedqueen' => 'Download the Speed Queen app to pay for your laundry with your phone and get notifications when your cycle is complete.',
        '/contact' => 'Contact Advance Coin Laundry in Orlando for questions about our services, hours, or to schedule wash & fold pickup.',
        '/reviews' => 'Read customer reviews and testimonials about Advance Coin Laundry\'s exceptional service and clean facilities in Orlando.',
        '/privacy-policy' => 'Privacy Policy for Advance Coin Laundry. Learn how we collect, use, and protect your information.',
        '/terms-of-service' => 'Terms of Service for Advance Coin Laundry. Read our terms and conditions for using our website and services.'
    ];
    return isset($descriptions[$request]) ? $descriptions[$request] : 'Orlando\'s premier laundromat with modern equipment and excellent service.';
}

$current_request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$current_request = rtrim($current_request, '/');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo getCurrentPageDescription($current_request); ?>">
    <title><?php echo getCurrentPageTitle($current_request); ?></title>
    <link rel="canonical" href="https://advancecoinlaundry.com<?php echo $current_request === '' ? '/' : $current_request; ?>">
    <link rel="icon" href="/images/favicon.ico" />
    <link rel="stylesheet" href="/global.css">
    <link rel="stylesheet" href="/header/header.css">
    <link rel="stylesheet" href="/footer/footer.css">
    <link rel="stylesheet" href="/transitions.css">
</head>
<body>
    <header class="header2">
        <div class="logo-header">
            <a href="/">
                <img src="/images/advance_coin_laundry_logo_2.png" alt="Advance Coin Laundry" />
            </a>
        </div>
        <nav class="navbar">
            <ul>
                <li>
                    <a href="/about">ABOUT</a>
                </li>
                <li>
                    <div id="services">SERVICES</div>
                    <div class="dropdown-content">
                        <a href="/coinmachine">COIN-OPERATED MACHINES</a>
                        <a href="/washfold">WASH & FOLD</a>
                        <a href="/dryclean">DRY CLEANING</a>
                    </div>
                </li>
                <li>
                    <a href="/speedqueen">SPEED QUEEN APP</a>
                </li>
                <li>
                    <a href="/reviews">REVIEWS</a>
                </li>
                <li>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
        </nav>
        <div class="mobile-menu-icon" id="mobileMenuIcon">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="mobile-menu" id="mobileMenu">
            <a href="/about">ABOUT</a>
            <a href="/coinmachine">COIN-OPERATED MACHINES</a>
            <a href="/washfold">WASH & FOLD</a>
            <a href="/dryclean">DRY CLEANING</a>
            <a href="/speedqueen">SPEED QUEEN APP</a>
            <a href="/reviews">REVIEWS</a>
            <a href="/contact">CONTACT</a>
        </div>
    </header>

    <main class="fade-content"><?php // Content will be inserted here by pages ?>