import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom'; // Replace Redirect with Navigate for React Router v6
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const AdminPrivateRoute = ({ component: Component, ...rest }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const auth = getAuth();
    const firestore = getFirestore();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (user) {
                const userRef = doc(firestore, 'users', user.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists() && docSnap.data().isAdmin) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [auth, firestore]);

    if (isLoading) {
        return <div>Loading...</div>; // Or any loading component
    }

    return (
        <Route {...rest} render={(props) => {
            if (!currentUser) {
                // Not logged in, redirect to login page
                return <Navigate to="/login" state={{ from: props.location }} replace />;
            }

            if (!isAdmin) {
                // Logged in but not an admin, redirect to home page or a "not authorized" page
                return <Navigate to="/" replace />;
            }

            // Logged in and is an admin, render the component
            return <Component {...props} />;
        }}/>
    );
};

export default AdminPrivateRoute;
