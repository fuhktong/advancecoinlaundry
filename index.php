<?php
// Get the request URI and remove query string
$request = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request = rtrim($request, '/');

// Define routes
$routes = [
    '' => 'pages/home.php',
    '/' => 'pages/home.php',
    '/coinmachine' => 'pages/coinmachine.php',
    '/washfold' => 'pages/washfold.php',
    '/dryclean' => 'pages/dryclean.php',
    '/about' => 'pages/about.php',
    '/speedqueen' => 'pages/speedqueen.php',
    '/contact' => 'pages/contact.php',
    '/reviews' => 'pages/reviews.php'
];

// Check if route exists
if (array_key_exists($request, $routes)) {
    $page = $routes[$request];
    if (file_exists($page)) {
        include $page;
    } else {
        include 'pages/404.php';
    }
} else {
    include 'pages/404.php';
}
?>