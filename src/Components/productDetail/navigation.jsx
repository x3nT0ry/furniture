import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ product }) => {
    const navigate = useNavigate();

    const handleAllProductsClick = () => {
        navigate("/furniture"); 
    };

    const handleCategoryClick = () => {
        navigate(`/furniture?category=${product.category}`);
    };

    return (
        <div className="navigation-wrapper1">
            {" "}
     
            <div className="navigation1">
                <span onClick={handleAllProductsClick} className="nav-link1">
                    Товари
                </span>
                <span> / </span>
                <span onClick={handleCategoryClick} className="nav-link1">
                    {product.category}
                </span>
            </div>
        </div>
    );
};

export default Navigation;
