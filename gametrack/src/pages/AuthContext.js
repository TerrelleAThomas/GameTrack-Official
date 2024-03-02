// Import React and other necessary hooks
import React, { useContext, useState, useEffect } from 'react';

// Import Firebase functionalities from the modular SDK
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {firebaseConfig} from "./FirebaseConfig";

// Your Firebase project's configuration (replace with your actual config)

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore services
const auth = getAuth(app);
const firestore = getFirestore(app);

export const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState({});
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user);
            if (user) {
                // Fetch user profile from Firestore
                const userProfileRef = doc(firestore, 'userProfiles', user.uid);
                const docSnap = await getDoc(userProfileRef);
                if (docSnap.exists()) {
                    setUserProfile(docSnap.data());
                } else {
                    console.log("No user profile found");
                }
            } else {
                setUserProfile({});
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const value = {
        currentUser,
        userProfile,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
