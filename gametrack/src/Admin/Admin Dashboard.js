import React from 'react';
import { NavLink } from 'react-router-dom';



export default function AdminDashboard() {
    const backgroundStyle = {
        backgroundImage: `url('../Pictures/Admin.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff',
    };

    return (
        <div style={backgroundStyle}>
            <header className="bg-dark text-white text-center py-3" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <h1>Admin Dashboard</h1>
            </header>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-dark mx-auto text-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/UserManagement" activeClassName="active">User Management</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Database" activeClassName="active">Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Reports" activeClassName="active">Report</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
