import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../Firebase"; // Ensure Firebase is configured properly

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
            // Optionally, handle the display of error to user here
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" height="60" />
                My App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/friendshiplist" className="nav-link">Friendship List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/individualpost" className="nav-link">Individual Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/message" className="nav-link">Message</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pairing" className="nav-link">Pairing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/post" className="nav-link">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recommendation" className="nav-link">Recommendation</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/userprofile" className="nav-link">User Profile</Link>
                    </li>
                    {/* Other nav items... */}
                    <li className="nav-item">
                        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
