import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function SearchBar () {
    return (
        <div className="container search-container">
            <h2 className="search-title">Search</h2>
            <form className="d-flex" role="search">
                <input className="form-control me-2 custom-search-bar" type="search" placeholder="Type your search here" aria-label="Search" />
                <button className="btn btn-outline-primary custom-search-btn" type="submit">Search</button>
            </form>
        </div>
    );
};
