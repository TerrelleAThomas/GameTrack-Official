import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off, push} from 'firebase/database';
import { firebaseConfig } from "../pages/FirebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function MessageComponent() {
    const [messages, setMessages] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    // Replace these with actual sender and receiver IDs as needed
    const senderId = 'YourSenderId';
    const receiverId = 'ReceiverId';

    useEffect(() => {
        // Fetch messages from Firebase
        const messagesRef = ref(database, 'DirectMessage');
        onValue(messagesRef, (snapshot) => {
            const messagesData = snapshot.val();
            const messagesList = messagesData ? Object.keys(messagesData).map(key => ({
                ...messagesData[key],
                createdAt: messagesData[key].createdAt && new Date(messagesData[key].createdAt).toLocaleString()
            })) : [];
            setMessages(messagesList);
        });

        // Fetch announcements from Firebase
        const announcementRef = ref(database, 'Announcement');
        onValue(announcementRef, (snapshot) => {
            const announcementData = snapshot.val();
            const announcementsList = announcementData ? Object.keys(announcementData).map(key => ({
                ...announcementData[key],
                createdAt: announcementData[key].createdAt && new Date(announcementData[key].createdAt).toLocaleString()
            })) : [];
            setAnnouncements(announcementsList);
        });

        // Detach listeners when the component unmounts
        return () => {
            off(messagesRef);
            off(announcementRef);
        };
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if (newMessage.trim() !== '') {
            const messagesRef = ref(database, 'DirectMessage');
            // Create a new message object
            const messageObject = {
                senderId,
                receiverId,
                content: newMessage,
                // Use Firebase server timestamp which will be converted on the server-side
                createdAt: new Date().toISOString(),
            };
            // Push the new message to Firebase
            push(messagesRef, messageObject);
            setNewMessage('');
        }
    };

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Messages</h2>
                        <div className="chat-container">
                            {messages.map((msg, index) => (
                                <div key={index} className="message">
                                    <p><strong>{msg.senderId}:</strong> {msg.content}</p>
                                    <p>{msg.createdAt}</p>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={sendMessage}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="form-control"
                                    placeholder="Type your message here..."
                                />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2>Announcements</h2>
                        {announcements.map((announcement, index) => (
                            <div key={index} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{announcement.title}</h5>
                                    <p className="card-text">{announcement.content}</p>
                                    <p className="card-text"><small>{announcement.createdAt}</small></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
