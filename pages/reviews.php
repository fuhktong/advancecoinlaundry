<?php
include 'header/header.php';
include 'googlereviews/googlereviews.php';
include 'footer-contact/footer-contact.php';
?>

<link rel="stylesheet" href="/sections/sections.css">
<link rel="stylesheet" href="/googlereviews/googlereviews.css">
<link rel="stylesheet" href="/footer-contact/footer-contact.css">

<?php renderGoogleReviews(); ?>

<?php renderFooterContact(); ?>

<?php include 'footer/footer.php'; ?>