import React, { useState } from 'react';

const RecipeFilter = ({ recipes, setFilteredRecipes }) => {
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        filterRecipes(e.target.value, searchTerm);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterRecipes(category, e.target.value);
    };

    const filterRecipes = (category, searchTerm) => {
        let filtered = recipes;
        if (category) {
            filtered = filtered.filter(recipe => recipe.category === category);
        }
        if (searchTerm) {
            filtered = filtered.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setFilteredRecipes(filtered);
    };

    return (
        <div>
            <select value={category} onChange={handleCategoryChange}>
                <option value=''>All Categories</option>
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
                <option value='snack'>Snack</option>
            </select>
            <input
                type='text'
                placeholder='Search recipes...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default RecipeFilter;