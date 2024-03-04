import React, { useState } from 'react';

export default function AdminInteractionPanel () {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add AJAX request to send data to the server
        console.log('Username:', username);
        console.log('Message:', message);
    };

    return (
        <div className="container mt-5">
            <h2>Admin User Interaction Panel</h2>
            <div id="interactionForm">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="3"
                            placeholder="Type your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
            <hr />
            <div id="interactionHistory">
                <h3>Interaction History</h3>
                {/* Interaction history will be loaded here */}
            </div>
        </div>
    );
};

