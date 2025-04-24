import React from 'react';
import '../../styles/test/testSearch.css';

const SearchFilterBar = () => {
    return (
        <div className="search-filter">
            <input type="text" placeholder="Search charities..." />
            <select>
                <option>All Categories</option>
                <option>Healthcare</option>
                <option>Environmental</option>
                <option>Education</option>
            </select>
            <select>
                <option>Sort by: Most Popular</option>
                <option>Highest Raised</option>
                <option>Newest</option>
            </select>
        </div>
    );
};

export default SearchFilterBar;
