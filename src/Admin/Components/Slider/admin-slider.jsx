import React, { useState, useEffect } from "react";
import "./AdminSlider.css";
import AddSlider from "./addSlider";
import DeleteSlider from "./deleteSlider";
import EditSlider from "./editSlider";

export default function AdminSlider() {
    const [slides, setSlides] = useState([]);
    const [selectedSlide, setSelectedSlide] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        fetchSlides();
    }, []);

    const fetchSlides = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/slides");
            const data = await response.json();
            setSlides(data);
        } catch (error) {
            console.error("Error loading slides:", error);
        }
    };

    const handleSelectSlide = (id) => setSelectedSlide(id);

    const handleEdit = () => setShowEditModal(true);
    const openAddModal = () => setShowAddModal(true);
    const closeAddModal = () => setShowAddModal(false);
    const openDeleteModal = () => setShowDeleteModal(true);
    const closeDeleteModal = () => setShowDeleteModal(false);
    const closeEditModal = () => setShowEditModal(false);

    const handleAddSlide = (newSlide) => {
        setSlides((prevSlides) => [...prevSlides, newSlide]);
        closeAddModal();
    };

    const handleEditSlide = (updatedSlide) => {
        setSlides((prevSlides) => 
            prevSlides.map((slide) => (slide.id_slider === updatedSlide.id_slider ? updatedSlide : slide))
        );
        closeEditModal();
    };

    const handleDeleteSlide = (id) => {
        setSlides((prevSlides) => prevSlides.filter((slide) => slide.id_slider !== id));
        closeDeleteModal();
    };

    return (
        <div className="admin-slider">
            <div className="button-group">
                <button onClick={openAddModal}>Додати</button>
                <button onClick={handleEdit} disabled={!selectedSlide}>Змінити</button>
                <button onClick={openDeleteModal} disabled={!selectedSlide}>Видалити</button>
            </div>
    
            {showAddModal && <AddSlider closeModal={closeAddModal} onAdd={handleAddSlide} />}
            {showDeleteModal && <DeleteSlider closeModal={closeDeleteModal} slideId={selectedSlide} onDelete={handleDeleteSlide} />}
            {showEditModal && <EditSlider closeModal={closeEditModal} slideId={selectedSlide} onEdit={handleEditSlide} />}
    
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Обрати</th>
                            <th>Зображення</th>
                            <th>Заголовок</th>
                            <th>Опис</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slides.map((slide) => (
                            <tr key={slide.id_slider} onClick={() => handleSelectSlide(slide.id_slider)} style={{ cursor: 'pointer' }}>
                                <td>
                                    <input
                                        type="radio"
                                        checked={selectedSlide === slide.id_slider}
                                        onChange={() => handleSelectSlide(slide.id_slider)}
                                    />
                                </td>
                                <td>
                                    <img src={`http://localhost:3001/images/slider/${slide.image}`} alt="Slide" width="100" />
                                </td>
                                <td>{slide.title}</td>
                                <td>{slide.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}    
