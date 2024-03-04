import React, { useState, useCallback } from 'react';



export default function UserProfilePage() {
    // State management for user data and navbar color
    const [user, setUser] = useState({
        name: "User Name", // Placeholder, should be replaced with actual user data
        email: "user@example.com", // Placeholder, should be replaced with actual user data
    });
    const [navbarColor, setNavbarColor] = useState("#343a40"); // Default to dark theme

    // Event handlers
    const changeNavbarColor = useCallback(() => {
        setNavbarColor("#007bff"); // Example: changing to a blue theme
    }, []);

    const confirmDeleteAccount = useCallback(() => {
        const confirmMessage = "Are you sure you want to delete your account?";
        if (window.confirm(confirmMessage)) {
            alert("Account deleted successfully!");
            history.push('/signup'); // Redirecting to the signup page
        } else {
            alert("Account deletion canceled.");
        }
    }, [history]);

    const redirectToUserProfile = useCallback((friendName) => {
        // Redirecting to the signup page with a friend's name as a query (example usage)
        history.push(`/signup?name=${encodeURIComponent(friendName)}`);
    }, [history]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: navbarColor }}>
                <a className="navbar-brand" href="#">Gamer Network</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={changeNavbarColor} style={{color: 'inherit', padding: 0, border: 'none', background: 'none'}}>Pairing</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => redirectToUserProfile(user.name)}>Friend Profile</a>
                        </li>
                        <li className="nav-item ml-2">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="profile-header mt-5 pt-3"> {/* Adjusted margin and padding to account for fixed navbar */}
                <img src="https://placekitten.com/150/150" alt="Profile Avatar" className="profile-avatar" />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </header>

            <div className="container mt-4 mb-4">
                <div>Main content goes here</div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <button className="btn btn-danger" onClick={confirmDeleteAccount}>Delete Account</button>
                </div>
            </div>
        </div>
    );
}
