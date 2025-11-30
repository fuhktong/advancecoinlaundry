# PHP Configuration Notes

## API Keys Required

### 1. Google Maps API Key
**Location:** `includes/advancemap.php`
**Replace:** `YOUR_GOOGLE_MAPS_API_KEY`
**With:** Your actual Google Maps JavaScript API key

### 2. Google Places API Key  
**Location:** `includes/googlereviews.php`
**Replace:** `YOUR_GOOGLE_PLACES_API_KEY`
**With:** Your actual Google Places API key

### 3. Google Places ID
**Location:** `includes/googlereviews.php`
**Replace:** `YOUR_PLACE_ID`
**With:** Your business's Google Places ID

## Server Requirements

- PHP 7.4 or higher
- `mail()` function enabled for contact forms
- Apache with mod_rewrite enabled for clean URLs

## File Structure

```
/
├── index.php           # Main router
├── .htaccess          # URL rewriting rules
├── pages/             # Individual page templates
│   ├── home.php
│   ├── about.php
│   ├── contact.php
│   ├── coinmachine.php
│   ├── washfold.php
│   ├── dryclean.php
│   ├── speedqueen.php
│   ├── reviews.php
│   └── 404.php
├── includes/          # Reusable components
│   ├── header.php
│   ├── footer.php
│   ├── mainpic.php
│   ├── sections.php
│   ├── scrolling-banner.php
│   ├── contactform.php
│   ├── advancemap.php
│   └── googlereviews.php
├── src/               # CSS and existing PHP files
│   ├── contactform.php # Contact form handler
│   └── *.css          # All stylesheets
└── public/            # Static assets
    └── *.png, *.svg   # Images and icons
```

## Testing Checklist

1. Test all page routes (/, /about, /contact, etc.)
2. Verify contact form submission
3. Check Google Maps integration
4. Test Google Reviews loading
5. Validate responsive design
6. Check all image paths
7. Test mobile menu functionality

## Security Notes

- Contact form includes basic sanitization
- CSRF protection may need to be added
- Consider rate limiting for form submissions
- Validate all file paths are secure

## Performance Optimizations

- CSS files are loaded per page
- JavaScript is inline for simplicity
- Images should be optimized
- Consider implementing caching headers