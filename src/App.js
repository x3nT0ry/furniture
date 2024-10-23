import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Furniture from "./Pages/Furniture";
import PayDel from "./Pages/PayDel";
import Contact from "./Pages/Contact";
import Returns from "./Pages/Returns";
import Exchanges from "./Pages/Exchanges";
import ProductDetail from "./Pages/ProductDetail";
import Logging from "./Admin/Pages/Logging"; // Import the Logging component
import Registration from "./Admin/Pages/Registration"; // Import the Registration component
import Admin from "./Admin/Pages/Admin-panel";
import { useAuth } from './Admin/Components/auth/AuthContext'; // Import useAuth

export default function App() {
    const { isAuthenticated } = useAuth(); // Get the authentication status

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
                <Route path="/registration" element={<Registration />} /> {/* Add registration route */}
                <Route path="/admin-panel" element={isAuthenticated ? <Admin /> : <Navigate to="/admin" />} /> {/* Protect the Admin route */}
            </Routes>
        </Router>
    );
}