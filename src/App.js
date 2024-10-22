import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Furniture from "./Pages/Furniture";
import PayDel from "./Pages/PayDel";
import Contact from "./Pages/Contact";
import Returns from "./Pages/Returns";
import Exchanges from "./Pages/Exchanges";
import ProductDetail from "./Pages/ProductDetail";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/furniture" element={<Furniture />} />
                <Route path="/payment-delivery" element={<PayDel />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/furniture/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}
