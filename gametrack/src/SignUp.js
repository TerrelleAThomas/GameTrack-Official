import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import axios from "axios"; // Note the lowercase 'axios' for correct import

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email,
            password,
        };
        try {
            const response = await axios.post('http://localhost:8080/api/register', user);

            if (response.status === 201) {
                console.log('User signed up successfully');
            } else {
                console.error('Sign-up failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Inline style for background image
    const backgroundStyle = {
        backgroundImage: `url('/Pictures/Channel.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh', // Ensure it covers the full viewport height
        color: '#fff', // Default text color to white for better visibility
    };

    // Style for the form container to add semi-transparent background, padding, etc.
    const formContainerStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '40px',
        borderRadius: '8px',
        marginTop: '50px',
    };

    return (
        <div style={backgroundStyle}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8" style={formContainerStyle}>
                        <h1 className="text-center mb-4">GamTracker</h1>
                        <p className="quote centered-quote">“Boss… you were right. It’s not about changing the world. It’s about doing our best to leave the world… the way it is. It’s about respecting the will of others and believing in your own.”</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password} // Fixed to use password state
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
