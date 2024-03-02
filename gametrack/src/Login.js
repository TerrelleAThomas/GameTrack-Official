import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from "./pages/FirebaseConfig"; // Assuming this is correctly set up


export default function LoginForm () {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = formData; // Correctly define email and password here

        try {
            // Sign in with Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully:', userCredential.user);
            // Optionally, redirect the user or update the UI to reflect the successful login
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error logging in:', error.message);
            // Optionally, update UI to show an error message
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className="bg" style={{
            backgroundImage: `url("/Pictures/Now.png")`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px'}}>
                        <h1 className="text-center mb-4">GamTracker</h1>
                        <p className="quote">“Boss… you were right. It’s not about changing the world. It’s about doing our best to leave the world… the way it is. It’s about respecting the will of others and believing in your own.”</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
