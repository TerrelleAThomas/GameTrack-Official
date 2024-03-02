import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Use Navigate for React Router v6
import { useAuth } from '../pages/AuthContext'; // Corrected import path

export default function SiteAdminRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth(); // Hook that provides the current user

    return (
        <Route
            {...rest}
            element={
                // Check for user authentication and role
                !currentUser ? (
                    // If the user is not logged in, redirect to the login page
                    <Navigate to="/login" replace />
                ) : !currentUser.isSiteAdmin || currentUser.isAdmin ? (
                    // If the user does not have the SiteAdmin role or is an Admin, redirect to a "not authorized" page
                    <Navigate to="/not-authorized" replace />
                ) : (
                    // Authorized as SiteAdmin, so render the component
                    <Component />
                )
            }
        />
    );
}
