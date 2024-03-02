import React from 'react';
// Adjust this import path to your Firebase config file
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function UserDatabase () {
    // Function to update the user status in Firebase
    const updateUserStatus = (userId, status) => {
        // Placeholder for Firebase logic to update user status
        firebase.database().ref('users/' + userId).update({
            status: status
        }).then(() => console.log("Status updated"))
            .catch(error => console.error("Error updating status:", error));
    };

    // Function to delete the user from Firebase
    const deleteUser = (userId) => {
        // Placeholder for Firebase logic to delete the user
        firebase.database().ref('users/' + userId).remove()
            .then(() => console.log("User deleted"))
            .catch(error => console.error("Error deleting user:", error));
    };

    // Inline styles for the background image
    const backgroundStyle = {
        backgroundImage: "url('/Pictures/Mario.jpg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    // Inline styles for the content container to ensure readability against the background
    const contentContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: '15px',
        padding: '20px',
        marginTop: '20px',
    };

    return (
        <div style={backgroundStyle}>
            <div className="container" style={contentContainerStyle}>
                <h2>User Database</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Registration Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/* Example static user data row */}
                                        <tr>
                                            <td>1</td>
                                            <td>JohnDoe</td>
                                            <td>john@example.com</td>
                                            <td>User</td>
                                            <td>2023-01-15</td>
                                            <td><span className="badge badge-success">Active</span></td>
                                            <td>
                                                <button className="btn btn-outline-success btn-sm" onClick={() => updateUserStatus('1', 'Active')}>Activate</button>
                                                <button className="btn btn-outline-info btn-sm" onClick={() => updateUserStatus('1', 'Inactive')}>Deactivate</button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => deleteUser('1')}>Delete</button>
                                            </td>
                                        </tr>
                                        {/* Map through dynamic user data here */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
