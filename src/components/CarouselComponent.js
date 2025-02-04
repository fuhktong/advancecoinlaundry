import React, { useState, useEffect } from 'react';
import './CarouselComponent.css';

const images = [
    { src: 'laundry 1.png', alt: 'Advance Coin Laundry Slide 001' },
    { src: 'laundry 2.png', alt: 'Advance Coin Laundry Slide 002' },
    { src: 'laundry 3.png', alt: 'Advance Coin Laundry Slide 003' },
    { src: 'laundry 4.png', alt: 'Advance Coin Laundry Slide 004' },
    { src: 'laundry 5.png', alt: 'Advance Coin Laundry Slide 005' },
    { src: 'laundry 6.png', alt: 'Advance Coin Laundry Slide 006' },
    { src: 'laundry 7.png', alt: 'Advance Coin Laundry Slide 007' },
];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image.src} alt={image.alt} className="d-block w-100" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;