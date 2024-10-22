import React, { useImperativeHandle, forwardRef, useState } from 'react'; 
import './Sorting.css';
import { handleSortChange } from '../furniture/Function'; 

const Sorting = forwardRef(({ products, setFilteredProducts, originalProducts }, ref) => {
    const [sortValue, setSortValue] = useState(""); 

    const handleSortChangeInternal = (event) => {
        const value = event.target.value;
        setSortValue(value);
        handleSortChange(originalProducts, setFilteredProducts)(event); 
    };

    const resetSorting = () => {
        setSortValue(""); 
        setFilteredProducts(originalProducts); 
    };

    useImperativeHandle(ref, () => ({
        resetSorting,
    }));

    return (
        <div className="sorting-container">
            <select 
                id="sortingSelect" 
                className="unique-select" 
                value={sortValue} 
                onChange={handleSortChangeInternal} 
            >
                <option value="">Сортування по ціні</option>
                <option value="asc">Від мінімальної ціни до максимальної</option>
                <option value="desc">Від максимальної ціни до мінімальної</option>
            </select>
        </div>
    );
});

export default Sorting;
