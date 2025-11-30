<?php
include 'header/header.php';
include 'google-reviews/google-reviews.php';
include 'footer-contact/footer-contact.php';
?>

<link rel="stylesheet" href="/sections/sections.css">
<link rel="stylesheet" href="/google-reviews/google-reviews.css">
<link rel="stylesheet" href="/footer-contact/footer-contact.css">

<?php renderGoogleReviews(); ?>

<?php renderFooterContact(); ?>

<?php include 'footer/footer.php'; ?>