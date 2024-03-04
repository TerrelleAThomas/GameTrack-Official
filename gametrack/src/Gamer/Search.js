import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Make sure to install axios with `npm install axios`

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/userSearch`, { params: { query: searchTerm } });
            console.log(response.data); // Do something with the response data
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    return (
        <div className="container search-container">
            <h2 className="search-title">Search</h2>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input
                    className="form-control me-2 custom-search-bar"
                    type="search"
                    placeholder="Type your search here"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-primary custom-search-btn" type="submit">Search</button>
            </form>
        </div>
    );
}
