import React from 'react';

export default function UserProfilePage () {

    // Event handler functions
    const changeNavbarColor = () => {
        // You can customize the color here
        document.querySelector('.navbar').style.backgroundColor = '#007bff';
    };

    const confirmDeleteAccount = () => {
        const confirmMessage = "Are you sure you want to delete your account?";
        if (window.confirm(confirmMessage)) {
            // Implement account deletion logic here
            alert("Account deleted successfully!");

            // Redirect to the sign-up page after account deletion
            window.location.href = 'signup.html';
        } else {
            alert("Account deletion canceled.");
            // Additional actions when the user cancels the account deletion can be added here
        }
    };

    const redirectToUserProfile = (friendName) => {
        // Redirect to the user profile page based on the friend's name
        window.location.href = 'userProfile.html?name=' + friendName;
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Gamer Network</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                            <a className="nav-link" href="#" onClick={changeNavbarColor}>Pairing</a>
                        </li>
                        {/* More nav items */}
                        <li className="nav-item ml-2">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="profile-header">
                <img src="https://placekitten.com/150/150" alt="Profile Avatar" className="profile-avatar" />
                <h2>User Name</h2>
                <p>Email: user@example.com</p>
            </header>

            <div className="container mt-4 mb-4">
                {/* Main content */}
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <button className="btn btn-danger" onClick={confirmDeleteAccount}>Delete Account</button>
                </div>
            </div>
        </div>
    );

}
