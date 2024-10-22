import React, { useState, useImperativeHandle, forwardRef } from "react"; 
import "./Finder.css";
import searchIcon from '../../Images/search.png';
import products from '../furniture/Array';

const Finder = forwardRef(({ onSearch }, ref) => { 
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value === "") {
            setSuggestions([]);
            onSearch(""); 
            return;
        }

       
        const newSuggestions = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(newSuggestions);
        onSearch(value); 
    };

    const toggleSearchInput = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm("");
            setSuggestions([]);
        }
    };

    const resetSearch = () => {
        setSearchTerm("");
        setSuggestions([]);
        onSearch(""); 
    };

    useImperativeHandle(ref, () => ({
        resetSearch,
    }));

    return (
        <div className='wrapper11'>
            <div className="finder">
                <img
                    src={searchIcon}
                    alt="Search"
                    className="search-icon"
                    onClick={toggleSearchInput}
                />
                {isOpen ? (
                    <input
                        type="text"
                        placeholder="Шукати..."
                        value={searchTerm}
                        onChange={handleInputChange}
                        className={`search-input ${isOpen ? "open" : ""}`} 
                    />
                ) : (
                    <span className="search-label" onClick={toggleSearchInput}>Пошук</span>
                )}
                {isOpen && suggestions.length > 0 && (
                    <ul className="suggestion-list">
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion.id}
                                className="suggestion-item"
                                onClick={() => {
                                    setSearchTerm(suggestion.name);
                                    onSearch(suggestion.name);
                                    setSuggestions([]);
                                }}
                            >
                                {suggestion.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
});

export default Finder;
