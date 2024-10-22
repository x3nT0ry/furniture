import React, { useState, useEffect } from "react"; 
import "./Slider.css";
import leftArrow from "../../Images/arrow-left.png";
import rightArrow from "../../Images/arrow-right.png";
import texts from "./data";

export default function Slider(){
    const [images] = useState([
        require("../../Images/slider1.jpg"),
        require("../../Images/slider2.jpg"),
        require("../../Images/slider3.jpg"),
        require("../../Images/slider4.jpg"),
        require("../../Images/slider5.jpg"),
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 13000);

        return () => clearInterval(sliderInterval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="slider-container">
            <div className="slider-image">
                <img
                    src={leftArrow}
                    alt="Previous"
                    className="arrow left-arrow"
                    onClick={goToPrevious}
                />
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
                <img
                    src={rightArrow}
                    alt="Next"
                    className="arrow right-arrow"
                    onClick={goToNext}
                />
            </div>
            <div className="text-overlay">
                <div className="text-background" />
                
         
                    <h1>{texts[currentIndex].title}</h1>
                
                <div className="text">{texts[currentIndex].description}</div>
            </div>
            <div className="dots-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};


