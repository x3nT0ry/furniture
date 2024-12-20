import React from "react";

const ButtonDel = ({ selectedRequestId, onDelete }) => {
    const handleDeleteClick = async () => {
        if (selectedRequestId !== null) {
            try {
                const response = await fetch(
                    `http://localhost:3001/api/delete-request/${selectedRequestId}`,
                    {
                        method: "DELETE",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to delete request");
                }

                onDelete(selectedRequestId);
            } catch (error) {
                console.error("Error deleting request:", error);
            }
        } else {
            console.warn("No request selected for deletion.");
        }
    };

    return (
        <button className="delete-button" onClick={handleDeleteClick}>
            Видалити запис
        </button>
    );
};

export default ButtonDel;
