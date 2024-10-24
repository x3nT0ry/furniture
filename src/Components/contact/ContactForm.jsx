import React, { useState } from "react";
import "./ContactForm.css";
import Button from "../button/Button";
import backArrow from "../../Images/left-arrow.png";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        question: "",
        tracking_code: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedFormData = {
            ...formData,
            tracking_code: formData.tracking_code || 0,
        };

        try {
            const response = await fetch("http://localhost:3001/api/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFormData),
            });

            if (response.ok) {
                const data = await response.json();
                setIsSubmitted(true);
            } else {
                const errorData = await response.json();
                alert(`Помилка: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Виникла помилка при відправці запиту.");
        }
    };

    return (
        <div className="form-wrapper">
            {isSubmitted ? (
                <div>
                    <div
                        className="back-link1"
                        onClick={() => navigate("/furniture")}
                    >
                        <img
                            src={backArrow}
                            alt="Back"
                            className="back-icon1"
                        />
                        <div className="back-text1">Повернутися до товарів</div>
                    </div>
                    <div className="thank-you-message">
                        Дякуємо! Ваш запит був надісланий. Ми обов'язково
                        відповімо вам у найближчий час! Відповідь надійде на
                        пошту або ми зателефонуємо вам!
                    </div>
                </div>
            ) : (
                <div>
                    <div className="contact-form-title">Contact</div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-column">
                            <div className="form-label">
                                <label>Ім'я:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-label">
                                <label>Прізвище:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-label">
                                <label>Електронна пошта:</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-label">
                                <label>Номер телефону:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-label">
                                <label>Країна:</label>
                                <input
                                    type="text"
                                    name="country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-label">
                                <label>Місто:</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-label">
                                <label>Ваше питання:</label>
                                <textarea
                                    name="question"
                                    required
                                    value={formData.question}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="form-label">
                                <label>Трекінговий код(При наявності):</label>
                                <input
                                    type="text"
                                    name="tracking_code"
                                    value={formData.tracking_code}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Button type="submit">Відправити запит</Button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
