import React, { useState } from "react";
import "./navigation.css";
import productImage from "../../../Images/logo_product.png";
import productImageHover from "../../../Images/logo_product_hover.png";
import orderImage from "../../../Images/logo_order.png";
import orderImageHover from "../../../Images/logo_order_hover.png";
import requestImage from "../../../Images/logo_answer.png";
import requestImageHover from "../../../Images/logo_answer_hover.png";
import sliderImage from "../../../Images/logo_slider.png";
import sliderImageHover from "../../../Images/logo_slider_hover.png";

export default function Navigation() {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (index) => {
        setActiveItem(index);
    };

    const getImage = (index) => {
        switch (index) {
            case 0:
                return activeItem === 0 ? productImageHover : productImage;
            case 1:
                return activeItem === 1 ? orderImageHover : orderImage;
            case 2:
                return activeItem === 2 ? requestImageHover : requestImage;
            case 3:
                return activeItem === 3 ? sliderImageHover : sliderImage;
            default:
                return productImage; 
        }
    };

    return (
        <div className="nav-container">
            <div className="empty-space1"></div>{" "}
            <div className="empty-space"></div>{" "}
            {["Товари", "Замовлення", "Звернення", "Слайдер"].map(
                (text, index) => (
                    <div
                        key={index}
                        className={`nav-item ${
                            activeItem === index ? "active" : ""
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        <img
                            src={getImage(index)}
                            alt={text}
                            className="nav-img"
                        />
                        <span className="nav-text">{text}</span>
                    </div>
                )
            )}
            <div className="empty-space"></div>{" "}
        </div>
    );
}
