import React, { useState } from "react";
import "./main-photo.css";

const ImageMains = ({ product }) => {
    const [currentImage, setCurrentImage] = useState(product.image);
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [zoomStyle, setZoomStyle] = useState({}); 

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setSelectedImage(image);
    };

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target;
        
        const posX = (offsetX / clientWidth) * 100;
        const posY = (offsetY / clientHeight) * 100;

        setZoomStyle({
            transformOrigin: `${posX}% ${posY}%`,
            transform: "scale(1.5)"
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({
            transform: "scale(1)"
        });
    };

    return (
        <div className="image-mains-wrapper">
            <div className="image-mains">
                <div className="thumbnail-container">
                    <img
                        src={product.image}
                        alt="Основне"
                        className={`thumbnail ${selectedImage === product.image ? 'selected' : ''}`}
                        onClick={() => handleImageClick(product.image)} 
                    />
                    <img
                        src={product.hoverImage}
                        alt="Основне (з вказівником)"
                        className={`thumbnail ${selectedImage === product.hoverImage ? 'selected' : ''}`}
                        onClick={() => handleImageClick(product.hoverImage)}
                    />
                    <img
                        src={product.image2}
                        alt="Додаткова картинка 1"
                        className={`thumbnail ${selectedImage === product.image2 ? 'selected' : ''}`}
                        onClick={() => handleImageClick(product.image2)}
                    />
                    <img
                        src={product.image3}
                        alt="Додаткова картинка 2"
                        className={`thumbnail ${selectedImage === product.image3 ? 'selected' : ''}`}
                        onClick={() => handleImageClick(product.image3)}
                    />
                </div>
                <div className="large-image-container">
                    <img
                        src={currentImage}
                        alt="Велике зображення"
                        className="large-image"
                        style={zoomStyle}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageMains;
