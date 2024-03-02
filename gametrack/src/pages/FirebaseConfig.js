import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyD18a6bP6Ec0QCsLm5bl04prN_WAchA4Is",
    authDomain: "gamtrack-3a2f2.firebaseapp.com",
    projectId: "gamtrack-3a2f2",
    storageBucket: "gamtrack-3a2f2.appspot.com",
    messagingSenderId: "492662811532",
    appId: "1:492662811532:web:4e59f354ffbc43eee384a9",
    measurementId: "G-5VTT1HQLJ1"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // Use the already initialized app if it exists
}

export const auth = getAuth(app);
export const db = getFirestore(app);
