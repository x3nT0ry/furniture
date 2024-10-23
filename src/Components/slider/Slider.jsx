import React, { useState, useEffect } from "react"; 
import "./Slider.css";
import leftArrow from "../../Images/arrow-left.png";
import rightArrow from "../../Images/arrow-right.png";
import texts from "./data";

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 13000);

        return () => clearInterval(sliderInterval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? texts.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
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
                {texts.map((text, index) => (
                    <img
                        key={index}
                        src={text.image}
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
                {texts.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
