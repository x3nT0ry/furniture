import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
    return (
        <button type="button" className="button-container"  onClick={onClick}>
            {children}
            <span className="triangle triangle1"></span>
            <span className="triangle triangle2"></span>
        </button>
    );
};

export default Button;
