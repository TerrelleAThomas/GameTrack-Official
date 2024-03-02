// src/Private Routes/UserRoute.js
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../pages/AuthContext'; // Adjusted the path based on assumed project structure

export default function UserRoute() {
    const { currentUser, userProfile } = useAuth();

    // Make sure to match the case of the properties exactly as they are defined in your userProfile object
    const isUserAuthorized = currentUser && !userProfile.isAdmin && !userProfile.isSiteAdmin;

    // If the user is authorized (not an admin or site admin), render the Outlet for nested routes
    // If the user is not authorized, redirect to the login page
    return isUserAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
}
