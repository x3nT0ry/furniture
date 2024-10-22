import React, { useState } from "react";
import Button from "../button/Button"; 
import minusIcon from "../../Images/minus.png"; 
import minusIconHover from "../../Images/minus-hover.png"; 
import plusIcon from "../../Images/plus.png"; 
import plusIconHover from "../../Images/plus-hover.png"; 
import "./Product-info.css"; 

const ProductCounter = ({ product }) => {
    const [quantity, setQuantity] = useState(1); 
    const [isMinusHovered, setIsMinusHovered] = useState(false); 
    const [isPlusHovered, setIsPlusHovered] = useState(false); 

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1); 
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1); 
        }
    };

    return (
        <div className="product-counter1">
            <p className="product-name1">{product.name}</p>
            <p className="product-price">Ціна: {product.price}</p>
            <p className="product-description">{product.description}</p>
            <div className="divider"></div>
            <div className="counter-container">
                <img
                    src={isMinusHovered ? minusIconHover : minusIcon}
                    alt="Зменшити"
                    className="counter-icon"
                    onClick={decreaseQuantity}
                    onMouseEnter={() => setIsMinusHovered(true)}
                    onMouseLeave={() => setIsMinusHovered(false)}
                />
                <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="quantity-input"
                />
                <img
                    src={isPlusHovered ? plusIconHover : plusIcon}
                    alt="Збільшити"
                    className="counter-icon"
                    onClick={increaseQuantity}
                    onMouseEnter={() => setIsPlusHovered(true)}
                    onMouseLeave={() => setIsPlusHovered(false)}
                />
            </div>
            <div style={{width: "100%"}}>
            <Button className="buy-button">Додати в корзину</Button>
            </div>
        </div>
    );
};

export default ProductCounter;
