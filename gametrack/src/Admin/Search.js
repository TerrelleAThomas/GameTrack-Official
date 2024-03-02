import React, { useState } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function UserManagement () {
    const [searchId, setSearchId] = useState('');
    const [userData, setUserData] = useState({
        userName: 'User Name',
        userDetails: 'User details go here...',
        registrationDate: 'Registration Date: January 1, 2022',
    });

    // Function to fetch user data from the backend
    const fetchUserData = async () => {
        try {
            const response = await fetch(`/api/usersearch/${searchId}`);
            if (response.ok) {
                const data = await response.json();
                setUserData({
                    userName: data.userName || 'User Name Not Found',
                    userDetails: "User details fetched from backend",
                    registrationDate: "Registration Date: " + (data.registrationDate || "Registration Date Not Available"),
                });
            } else {
                console.error('Failed to fetch user data');
                alert('User not found');
                // Reset displayed user data to indicate not found
                setUserData({
                    userName: 'User Not Found',
                    userDetails: 'User details not available',
                    registrationDate: 'Registration Date Not Available',
                });
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            alert('Error fetching user data');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="user-list">
                        <h2 className="text-center mb-4">User Search</h2>
                        <div className="input-group mb-3 search-bar">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter search ID..."
                                value={searchId}
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" onClick={fetchUserData}>Search</button>
                            </div>
                        </div>
                        <div className="user-card">
                            <h5>{userData.userName}</h5>
                            <p>{userData.userDetails}</p>
                            <small>{userData.registrationDate}</small>
                        </div>
                    </div>
                    <a href="/admin-dashboard" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                </div>
            </div>
        </div>
    );
}
