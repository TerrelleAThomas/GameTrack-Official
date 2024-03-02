import React from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// External CSS import (optional)
// import './AdminDashboard.css';

export default function SiteAdminDashboard() {
    // Function to handle tab click - Adjust based on your state management
    const handleNavLinkClick = (event) => {
        event.preventDefault();
        const tabId = event.target.getAttribute('href').substring(1);
        showTab(tabId);
    };

    // Function to show tab content - Implement as needed
    const showTab = (tabId) => {
        console.log(`Link clicked for tab: ${tabId}`);
        // Logic to display the tab content
    };

    return (
        <div style={{
            backgroundImage: `url('Admin.jpg')`, // Ensure you have 'Admin.jpg' in your public/assets folder or change the path as needed
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            margin: 0,
            padding: 0,
        }} className="d-flex align-items-center justify-content-center">
            <header className="bg-dark text-white text-center py-3">
                <h1>Site Admin Dashboard</h1>
            </header>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark mx-auto text-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#game" onClick={handleNavLinkClick}>Game</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#postCommentModeration" onClick={handleNavLinkClick}>Moderation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#announcement" onClick={handleNavLinkClick}>Announcement</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        {/* Content sections can be added here if needed */}
                    </div>
                </div>
            </div>
        </div>
    );
}
