import React, { useState, useEffect } from 'react';

import 'firebase/firestore';
import {db} from "../pages/FirebaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function AnnouncementPage () {
    const [announcements, setAnnouncements] = useState([]);
    const [deletedAnnouncements, setDeletedAnnouncements] = useState([]);
    const [announcementTitle, setAnnouncementTitle] = useState('');
    const [announcementContent, setAnnouncementContent] = useState('');

    useEffect(() => {
        // Fetch announcements from Firestore
        const fetchAnnouncements = async () => {
            try {
                const announcementsSnapshot = await db.collection('announcements').get();
                const announcementsData = announcementsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setAnnouncements(announcementsData);
            } catch (error) {
                console.error('Error fetching announcements: ', error);
            }
        };

        // Fetch deleted announcements from Firestore
        const fetchDeletedAnnouncements = async () => {
            try {
                const deletedAnnouncementsSnapshot = await db.collection('deletedAnnouncements').get();
                const deletedAnnouncementsData = deletedAnnouncementsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDeletedAnnouncements(deletedAnnouncementsData);
            } catch (error) {
                console.error('Error fetching deleted announcements: ', error);
            }
        };

        fetchAnnouncements();
        fetchDeletedAnnouncements();
    }, []);

    const createAnnouncement = async (e) => {
        e.preventDefault();
        // Add the new announcement to Firestore
        try {
            await db.collection('announcements').add({
                title: announcementTitle,
                content: announcementContent,
                postedOn: new Date().toLocaleDateString(),
            });
            // Clear the input fields
            setAnnouncementTitle('');
            setAnnouncementContent('');
        } catch (error) {
            console.error('Error creating announcement: ', error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {/* Announcement Form */}
                    <div className="announcement-form">
                        <h2 className="text-center mb-4">Create Announcement</h2>
                        <form onSubmit={createAnnouncement}>
                            <div className="form-group">
                                <label htmlFor="announcementTitle">Announcement Title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="announcementTitle"
                                    required
                                    value={announcementTitle}
                                    onChange={(e) => setAnnouncementTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="announcementContent">Announcement Content:</label>
                                <textarea
                                    className="form-control"
                                    id="announcementContent"
                                    rows="3"
                                    required
                                    value={announcementContent}
                                    onChange={(e) => setAnnouncementContent(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Announcement</button>
                        </form>
                    </div>

                    {/* List of Announcements */}
                    <div className="announcement-list">
                        <h2 className="text-center mb-4">Announcements</h2>
                        {announcements.map((announcement) => (
                            <div key={announcement.id} className="announcement-card">
                                <h5>{announcement.title}</h5>
                                <p>{announcement.content}</p>
                                <small>Posted on: {announcement.postedOn}</small>
                            </div>
                        ))}
                    </div>

                    {/* List of Deleted Announcements */}
                    <div className="announcement-list">
                        <h2 className="text-center mb-4">Deleted Announcements</h2>
                        {deletedAnnouncements.map((deletedAnnouncement) => (
                            <div key={deletedAnnouncement.id} className="announcement-card">
                                <h5>{deletedAnnouncement.title}</h5>
                                <p>{deletedAnnouncement.content}</p>
                                <small>Deleted on: {deletedAnnouncement.deletedOn}</small>
                            </div>
                        ))}
                    </div>

                    <a href="admin-dashboard.html" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                </div>
            </div>
        </div>
    );

}
