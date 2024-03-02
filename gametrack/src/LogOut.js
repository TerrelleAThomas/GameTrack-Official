import React, { useContext, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from "./pages/AuthContext";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function Logout() {
    const { signOut } = useContext(AuthContext);

    useEffect(() => {
        signOut(); // Sign out when the component mounts
    }, [signOut]);

    // Redirect to login after signing out
    return <Navigate to="/login" replace />;
}
