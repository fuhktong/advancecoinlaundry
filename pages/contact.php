<?php
include 'header/header.php';
include 'contact-form/contact-form.php';
include 'google-map/google-map.php';
include 'footer-contact/footer-contact.php';
?>

<link rel="stylesheet" href="/sections/sections.css">
<link rel="stylesheet" href="/contact-form/contact-form.css">
<link rel="stylesheet" href="/google-map/google-map.css">
<link rel="stylesheet" href="/footer-contact/footer-contact.css">

<?php renderContactForm(); ?>
<?php renderAdvanceMap(); ?>

<?php renderFooterContact(); ?>

<?php include 'footer/footer.php'; ?>