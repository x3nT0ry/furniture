import React from "react";
import { useParams } from "react-router-dom";
import "../Components/productDetail/ProductDetail.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Navigation from "../Components/productDetail/navigation";
import products from "../Components/furniture/Array";
import ImageMains from "../Components/productDetail/main-photo";
import ProductCounter from "../Components/productDetail/Product-info";
import PodrobniyProduct from "../Components/productDetail/PodrobniyProduct";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return <div>Товар не знайдено!</div>;
    }

    return (
        <>
            <Header />
            <Navigation product={product} />
            <div className="product-detail-container">
                <ImageMains product={product} />
                <div className="product-counter-wrapper">
                    <ProductCounter product={product} />
                </div>
            </div>
            <PodrobniyProduct
                additionalInfo={product.additionalInfo}
                material={product.material}
                weight={product.weight}
                width={product.width}
                height={product.height}
                length={product.length}
                country={product.country}
            />
            <Footer />
        </>
    );
}
