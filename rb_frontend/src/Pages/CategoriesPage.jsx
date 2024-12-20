import React, { useState, useEffect } from 'react';

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // useState() -> used for saving the fetched data
    // useEffect() -> for async func

    // how to fetch data from an api - 'http://localhost:4000/categories'
    // save the fechted data in a state
    // access it form html part
    return (
        <div>
            Categories
        </div>
    );
};

export default CategoriesPage;
