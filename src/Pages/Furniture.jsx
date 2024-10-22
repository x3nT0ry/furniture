import React, { useEffect, useState, useRef } from "react"; 
import { useLocation } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import LineFurniture from "../Components/lineFurniture/LineFurniture";
import Photo from "../Components/lphoto/Photo";
import Products from "../Components/furniture/ProductsCard";
import Finder from "../Components/finder/Finder";
import Sorting from "../Components/sorting/Sorting";
import {
    handleSearch,
    filterByCategory,
} from "../Components/furniture/Function";
import products from "../Components/furniture/Array";
import Button from "../Components/button/Button";
import "../Components/furniture/Furniture.css";

export default function Furniture() {
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const originalProducts = products;
    const [selectedCategory, setSelectedCategory] = useState(null);

    const finderRef = useRef();
    const sortingRef = useRef();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const category = query.get("category");

        if (category) {
            filterByCategory(products, setFilteredProducts)(category);
            setSelectedCategory(category);
        } else {
            setFilteredProducts(products);
            setSelectedCategory(null);
        }
    }, [location.search]);

    const handleCategorySelect = (category) => {
        filterByCategory(products, setFilteredProducts)(category);
        setSelectedCategory(category);
    };

    const handleResetFilters = () => {
        setFilteredProducts(products);
        setSelectedCategory(null);

        if (finderRef.current) {
            finderRef.current.resetSearch();
        }

        if (sortingRef.current) {
            sortingRef.current.resetSorting();
        }
    };

    const searchHandler = handleSearch(products, setFilteredProducts);

    return (
        <>
            <Header />
            <LineFurniture
                onCategorySelect={handleCategorySelect}
                onResetFilters={handleResetFilters}
                selectedCategory={selectedCategory}
            />
            <Photo />
            <div className="wrapper-function">
                <div className="finder-sorting-container">
                    <div className="wrapper-function-item">
                        <Finder ref={finderRef} onSearch={searchHandler} />
                    </div>
                    <div className="wrapper-function-item">
                        <Button onClick={handleResetFilters}>
                            Скинути всі фільтри
                        </Button>
                    </div>
                    <div className="wrapper-function-item">
                        <Sorting
                            ref={sortingRef}
                            products={filteredProducts}
                            setFilteredProducts={setFilteredProducts}
                            originalProducts={originalProducts}
                        />
                    </div>
                </div>
            </div>
            <Products products={filteredProducts} />
            <Footer />
        </>
    );
}
