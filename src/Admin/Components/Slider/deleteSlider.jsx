import React from "react";

export default function DeleteSlider({ closeModal, slideId }) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/delete-slide/${slideId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                console.log("Слайд успешно удалён");
                closeModal();
                window.location.reload();
            } else {
                console.error("Ошибка при удалении слайда");
            }
        } catch (error) {
            console.error("Ошибка:", error);
        }
    };

    React.useEffect(() => {
        handleDelete();
    }, []); 

    return (
        <div className="modal">
            <p>Слайд удаляется...</p>
        </div>
    );
}
