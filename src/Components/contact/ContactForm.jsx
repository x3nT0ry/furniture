import React, { useState } from "react"; 
import "./ContactForm.css";
import Button from "../button/Button";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        question: "",
        trackingNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="form-wrapper">
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
                            name="trackingNumber"
                            value={formData.trackingNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Button type="submit">Відправити запит</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
