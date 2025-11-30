<?php
function getCurrentPageTitle($request) {
    $titles = [
        '' => 'Advance Coin Laundry - Best Laundromat in Albuquerque',
        '/' => 'Advance Coin Laundry - Best Laundromat in Albuquerque',
        '/about' => 'About Us - Advance Coin Laundry',
        '/coinmachine' => 'Coin-Operated Machines - Advance Coin Laundry',
        '/washfold' => 'Wash & Fold Service - Advance Coin Laundry',
        '/dryclean' => 'Dry Cleaning Service - Advance Coin Laundry',
        '/speedqueen' => 'Speed Queen App - Advance Coin Laundry',
        '/contact' => 'Contact Us - Advance Coin Laundry',
        '/reviews' => 'Customer Reviews - Advance Coin Laundry'
    ];
    return isset($titles[$request]) ? $titles[$request] : 'Advance Coin Laundry';
}

$current_request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$current_request = rtrim($current_request, '/');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo getCurrentPageTitle($current_request); ?></title>
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