import React from "react";
import "./ProductsCard.css"
import { Link } from "react-router-dom";
import NoResult from "../finder/NoResult"; 

export default function Products({ products }) { 
    return (
        <div className="furniture-wrapper ">
        <div className="furniture-container">
            <ul className="products-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product.id} className="product-item">
                            <Link to={`/furniture/${product.id}`} className="image-link">
                                <div className="image-container">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                    <img src={product.hoverImage} alt={product.name} className="hover-image" />
                                </div>
                            </Link>
                            <Link to={`/furniture/${product.id}`} className="product-name">
                                {product.name}
                            </Link>
                            <p className="product-price2">{product.price}</p>
                        </li>
                    ))
                ) : (
                    <NoResult />
                )}
            </ul>
            </div>
        </div>
    );
}
