import React, { useState, useEffect } from "react";
import "./LineFurniture.css";
import img1 from "../../Images/stul.png";
import img2 from "../../Images/skaf.png";
import img3 from "../../Images/krovat.png";
import img4 from "../../Images/puf.png";
import img5 from "../../Images/stol.png";
import cross from "../../Images/cross.png";
import hovercross from "../../Images/hovercross.png";

const categories = [
    { id: 1, image: img1, text: "Стільці" },
    { id: 2, image: img2, text: "Шафи" },
    { id: 3, image: img3, text: "Ліжка" },
    { id: 4, image: img4, text: "Пуфи" },
    { id: 5, image: img5, text: "Столи" },
];

export default function LineFurniture({ onCategorySelect, onResetFilters, selectedCategory }) {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        const selectedCategoryObj = categories.find(
            (category) => category.text === selectedCategory
        );
        setSelectedCategoryId(selectedCategoryObj ? selectedCategoryObj.id : null);
    }, [selectedCategory]);

    const handleCategorySelect = (category) => {
        setSelectedCategoryId(category.id);
        onCategorySelect(category.text);
    };

    const handleResetFilters = () => {
        setSelectedCategoryId(null);
        onResetFilters();
    };

    return (
        <div className="line-container1">
            <div className="wrapper">
                {categories.map((category) => (
                    <div
                        className="line-item1"
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                    >
                        <img src={category.image} alt={category.text} className="product-image1" />
                        <div className="product-text1">{category.text}</div>
                        {selectedCategoryId === category.id && (
                            <img
                                src={hoveredId === category.id ? hovercross : cross}
                                alt="Reset Filters"
                                className="reset-filters-icon"
                                onMouseEnter={() => setHoveredId(category.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleResetFilters();
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
