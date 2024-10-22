export const filterByCategory = (products, setFilteredProducts) => (category) => {
    const filtered = products.filter(
        (product) => product.category === category
    );
    setFilteredProducts(filtered);
};
export const handleSearch = (products, setFilteredProducts) => (searchTerm) => {
    if (searchTerm) {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    } else {
        setFilteredProducts(products); 
    }
};


export const handleSortChange = (originalProducts, setFilteredProducts) => (event) => {
    const value = event.target.value;

    let sortedProducts;
    if (value === "asc") {
        sortedProducts = [...originalProducts].sort((a, b) => {
            return parseFloat(a.price.replace(/\s+/g, '').replace('грн', '')) - parseFloat(b.price.replace(/\s+/g, '').replace('грн', ''));
        });
    } else if (value === "desc") {
        sortedProducts = [...originalProducts].sort((a, b) => {
            return parseFloat(b.price.replace(/\s+/g, '').replace('грн', '')) - parseFloat(a.price.replace(/\s+/g, '').replace('грн', ''));
        });
    } else {

        sortedProducts = originalProducts;
    }
    setFilteredProducts(sortedProducts);
};
