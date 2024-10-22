import React, { useState } from "react";
import "./PodrobniyProduct.css";

const PodrobniyProduct = ({ additionalInfo, material, weight, width, height, length, country }) => {
    const [isDescriptionOpen, setDescriptionOpen] = useState(true); 
    const [isCharacteristicsOpen, setCharacteristicsOpen] = useState(false);

    const toggleDescription = () => {
        setDescriptionOpen((prev) => !prev);
        if (isCharacteristicsOpen) setCharacteristicsOpen(false); 
    };

    const toggleCharacteristics = () => {
        setCharacteristicsOpen((prev) => !prev);
        if (isDescriptionOpen) setDescriptionOpen(false); 
    };

    return (
        <div className="podrobniy-product-wrapper">
            <div className="podrobniy-product">
                <div className="titles-container">
                    <a 
                        onClick={toggleDescription} 
                        className={`clickable-link ${isDescriptionOpen ? 'active' : 'inactive'}`}
                    >
                        Опис
                    </a>
                    <a 
                        onClick={toggleCharacteristics} 
                        className={`clickable-link ${isCharacteristicsOpen ? 'active' : 'inactive'}`}
                    >
                        Характеристики
                    </a>
                </div>

                {isDescriptionOpen && (
                    <div className="description-content">
                        <p>{additionalInfo}</p> 
                    </div>
                )}

                {isCharacteristicsOpen && (
                    <div className="characteristics-content">
                        <table className="characteristics-table">
                            <thead>
                                
                                <tr>
                                    <th>Характеристика</th>
                                    <th>Значення</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>Країна виробника</td>
                                    <td>{country}</td>
                                </tr>
                                <tr>
                                    <td>Матеріал</td>
                                    <td>{material}</td>
                                </tr>
                                <tr>
                                    <td>Вага</td>
                                    <td>{weight}</td>
                                </tr>
                                <tr>
                                    <td>Ширина</td>
                                    <td>{width}</td>
                                </tr>
                                <tr>
                                    <td>Висота</td>
                                    <td>{height}</td>
                                </tr>
                                <tr>
                                    <td>Довжина</td>
                                    <td>{length}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PodrobniyProduct;
