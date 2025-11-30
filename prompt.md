# React to PHP Conversion Checklist

## Current React Application Analysis
- **Framework**: React with React Router DOM
- **Pages**: 8 main routes (Home, Coinmachine, Washfold, Dryclean, About, SpeedQueen, Contact, Reviews, 404)
- **Components**: 12+ reusable components (Header, Footer, ContactForm, GoogleReviews, Map, etc.)
- **Features**: Google Maps integration, contact forms, image carousels, responsive design
- **Styling**: CSS modules with transitions and animations
- **Assets**: Extensive image library in public folder

## PHP Conversion Strategy

### 1. Infrastructure Setup
- [ ] Create PHP routing system (index.php + .htaccess)
- [ ] Set up folder structure for PHP includes/templates
- [ ] Configure PHP environment (ensure mail() function works)
- [ ] Create config file for database connections (if needed)

### 2. Core Structure Conversion
- [ ] Convert App.js routing to PHP router
- [ ] Create main layout template (header + footer + content area)
- [ ] Convert CSS transitions to JavaScript-based animations
- [ ] Set up PHP session management (if needed)

### 3. Page Conversion (React → PHP)
- [ ] Home page (home.js → home.php)
- [ ] Coin machine page (coinmachine.js → coinmachine.php)
- [ ] Wash & fold page (washfold.js → washfold.php)
- [ ] Dry cleaning page (dryclean.js → dryclean.php)
- [ ] About page (about.js → about.php)
- [ ] SpeedQueen page (speedqueen.js → speedqueen.php)
- [ ] Contact page (contact.js → contact.php)
- [ ] Reviews page (reviews.js → reviews.php)
- [ ] 404 page (page404.js → 404.php)

### 4. Component Conversion
- [ ] Header component (header2.js → includes/header.php)
- [ ] Footer component (Footer.js → includes/footer.php)
- [ ] Contact form (contactform.js → includes/contactform.php) *Already exists
- [ ] Google Reviews (googlereviews.js → includes/googlereviews.php)
- [ ] Map component (advancemap.js → includes/map.php)
- [ ] Image carousel (CarouselComponent.js → includes/carousel.php)
- [ ] Main picture component (mainpic.js → includes/mainpic.php)
- [ ] Sections component (sections.js → includes/sections.php)
- [ ] Scrolling banner (scrolling-banner.js → includes/banner.php)
- [ ] Home page popup (home-page-popup.js → includes/popup.php)
- [ ] Footer contact (footer-contact.js → includes/footer-contact.php)

### 5. JavaScript/CSS Migration
- [ ] Extract client-side JavaScript from React components
- [ ] Convert React state management to vanilla JS or PHP sessions
- [ ] Migrate CSS from component files to global stylesheets
- [ ] Implement mobile menu functionality in vanilla JS
- [ ] Convert scroll-to-top functionality
- [ ] Implement page transitions with JavaScript

### 6. Third-party Integration Conversion
- [ ] Google Maps API integration (client-side JavaScript)
- [ ] Google Reviews API (server-side PHP + client-side display)
- [ ] Email functionality (already implemented in contactform.php)
- [ ] SEO meta tags (React Helmet → PHP meta generation)

### 7. Asset Management
- [ ] Verify all images are accessible from public folder
- [ ] Update image paths in PHP templates
- [ ] Optimize image loading (lazy loading implementation)
- [ ] Set up proper favicon and manifest handling

### 8. URL Structure & SEO
- [ ] Configure clean URLs with .htaccess
- [ ] Implement proper meta tags for each page
- [ ] Set up canonical URLs
- [ ] Create XML sitemap
- [ ] Implement 301 redirects if URLs change

### 9. Performance & Security
- [ ] Implement PHP caching (if needed)
- [ ] Add CSRF protection to forms
- [ ] Sanitize all user inputs
- [ ] Optimize database queries (if database is added)
- [ ] Implement rate limiting for contact forms

### 10. Testing & Quality Assurance
- [ ] Test all pages load correctly
- [ ] Verify form submissions work
- [ ] Test responsive design on all devices
- [ ] Check Google Maps functionality
- [ ] Validate all external links
- [ ] Test page transitions and animations
- [ ] Cross-browser compatibility testing

## Technical Implementation Notes

### Routing Structure
```php
// index.php
switch($route) {
    case '/': include 'pages/home.php'; break;
    case '/coinmachine': include 'pages/coinmachine.php'; break;
    // ... other routes
}
```

### Component Include Pattern
```php
// In each page
include 'includes/header.php';
include 'includes/specific-components.php';
include 'includes/footer.php';
```

### JavaScript State Management
- Replace React state with vanilla JavaScript
- Use localStorage for persistent data
- Implement custom event system for component communication

### CSS Strategy
- Maintain existing CSS structure
- Convert React CSS modules to regular CSS classes
- Implement CSS animations to replace React transitions

## Migration Priority Order
1. Core infrastructure (routing, layout)
2. Static pages (About, SpeedQueen)
3. Dynamic components (Contact form, Reviews)
4. Complex features (Maps, Carousel)
5. Animations and transitions
6. SEO and performance optimization