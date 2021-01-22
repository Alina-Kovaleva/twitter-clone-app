import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    return (
        <input
            className="search-input form-control"
            type="text"
            placeholder='Search by notes'
        />
    )
}

export default SearchPanel;