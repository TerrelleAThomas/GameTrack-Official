import React, { useEffect, useState } from 'react';
// Import the necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off, push } from 'firebase/database';
import {firebaseConfig} from "../pages/FirebaseConfig";

// Your Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Message() {
    const [messages, setMessages] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const announcementsRef = ref(database, 'announcements');

        const handleNewAnnouncement = (snapshot) => {
            if (snapshot.exists()) {
                const announcementData = snapshot.val();
                setAnnouncements((prev) => [...prev, announcementData]);
            }
        };

        onValue(announcementsRef, handleNewAnnouncement, { onlyOnce: false });

        return () => {
            off(announcementsRef, 'value', handleNewAnnouncement);
        };
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if (newMessage !== '') {
            // Example of sending a message (you need to define the path according to your database structure)
            const messagesRef = ref(database, 'messages');
            push(messagesRef, {
                sender: 'You',
                content: newMessage,
                timestamp: Date.now(),
            });
            setNewMessage('');
        }
    };

    return (
        <div>
            {/* Navbar and other components */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Message Chat</h2>
                        <div className="chat-container">
                            {messages.map((msg, index) => (
                                <div key={index} className="message">
                                    <p><strong>{msg.sender}:</strong> {msg.content}</p>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={sendMessage}>
                            <div className="input-group">
                                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="form-control" placeholder="Type your message..." />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2>Announcements</h2>
                        <div>
                            {announcements.map((announcement, index) => (
                                <div key={index} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{announcement.title}</h5>
                                        <p className="card-text">{announcement.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
