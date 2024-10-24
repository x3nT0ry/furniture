import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Furniture from "./Pages/Furniture";
import PayDel from "./Pages/PayDel";
import Contact from "./Pages/Contact";
import Returns from "./Pages/Returns";
import Exchanges from "./Pages/Exchanges";
import ProductDetail from "./Pages/ProductDetail";
import Logging from "./Admin/Pages/Logging"; 
import Registration from "./Admin/Pages/Registration"; 
import Admin from "./Admin/Pages/Admin-panel"; 
import Request from "./Admin/Pages/Request"; // Import Request component
import Order from "./Admin/Pages/Order"; // Import Order component
import Product from "./Admin/Pages/Product"; // Import Product component
import Slide from "./Admin/Pages/Slide"; // Import Slide component
import RequestDetail from "./Admin/Components/Request/request-detail"; // Import RequestDetail component
import { useAuth } from './Admin/Components/auth/AuthContext'; 

export default function App() {
    const { isAuthenticated } = useAuth(); 

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
                <Route path="/admin" element={<Logging />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/admin-panel" element={isAuthenticated ? <Admin /> : <Navigate to="/admin" />} />
                <Route path="/admin-panel/request" element={isAuthenticated ? <Request /> : <Navigate to="/admin" />} />
                <Route path="/admin-panel/order" element={isAuthenticated ? <Order /> : <Navigate to="/admin" />} />
                <Route path="/admin-panel/product" element={isAuthenticated ? <Product /> : <Navigate to="/admin" />} />
                <Route path="/admin-panel/slide" element={isAuthenticated ? <Slide /> : <Navigate to="/admin" />} />
                <Route path="/admin-panel/request/:id_request" element={isAuthenticated ? <RequestDetail /> : <Navigate to="/admin" />} />



            </Routes>
        </Router>
    );
}
