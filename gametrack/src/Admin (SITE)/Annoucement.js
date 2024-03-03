import React, { useState, useEffect } from 'react';

export default function AnnouncementPage() {
    const [announcements, setAnnouncements] = useState([]);
    const [announcementContent, setAnnouncementContent] = useState('');

    useEffect(() => {
        // Fetch announcements from the backend
        const fetchAnnouncements = async () => {
            try {
                const response = await fetch('/api/announcements');
                if (response.ok) {
                    const data = await response.json();
                    setAnnouncements(data);
                } else {
                    throw new Error('Error fetching announcements');
                }
            } catch (error) {
                console.error('Error fetching announcements: ', error);
            }
        };

        fetchAnnouncements();
    }, []);

    const createAnnouncement = async (e) => {
        e.preventDefault();
        if (!announcementContent) {
            alert('Please enter announcement content');
            return;
        }
        // Post the new announcement to the backend
        try {
            const response = await fetch('/api/announcements', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: announcementContent }),
            });
            if (response.ok) {
                const newAnnouncement = await response.json();
                setAnnouncements([...announcements, newAnnouncement]);
                setAnnouncementContent('');
            } else {
                throw new Error('Error creating announcement');
            }
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
                            <div key={announcement.announcementId} className="announcement-card">
                                <p>{announcement.content}</p>
                                {/* Assuming 'dateCreated' is the field name in your backend model */}
                                <small>Posted on: {announcement.dateCreated}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
