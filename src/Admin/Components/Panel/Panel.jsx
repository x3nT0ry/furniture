import React from "react";
import AdminImg from "../../../Images/admin.png"; // замініть шлях на ваш реальний шлях до зображення
import "./Panel.css"; // додайте стилі, якщо потрібно

const Panel = () => {
    return (
        <div className="panel-container">
            <img src={AdminImg} alt="Вітаємо" className="panel-image" />
            <div className="panel-text">Вітаємо у нашій дружній команді! Дякуємо, що Ви з нами!</div>
        </div>
    );
};

export default Panel;
