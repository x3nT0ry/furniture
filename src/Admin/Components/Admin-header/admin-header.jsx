import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import onlineImage from "../../../Images/online.png"; 
import "./admin-header.css";

export default function Admins() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/admin");
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        logout();
        navigate("/admin");
    };

    return (
        <header className="admin-header">
            <div className="header-wrapper">
                <div className="driftwood-title">DriftWood</div>
                <div className="user-info">
                    <img src={onlineImage} alt="Online" className="online-icon" />
                    Адміністратор:
                </div>
                <button className="logout-button" onClick={handleLogout}>
                    Вийти
                </button>
            </div>
        </header>
    );
}