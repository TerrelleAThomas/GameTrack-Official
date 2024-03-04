import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Feedback () {
    const [feedbackData, setFeedbackData] = useState({
        dateSubmitted: new Date().toISOString(),
        feedbackContent: '',
        feedbackId: '',
        userId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedbackData);
        // Send data to the backend service
    };

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="feedbackContent">Feedback Content</label>
                    <textarea className="form-control" id="feedbackContent" name="feedbackContent" placeholder="Your feedback.." value={feedbackData.feedbackContent} onChange={handleChange} style={{ height: '200px' }}></textarea>
                </div>
                {/* Additional inputs for feedbackId and userId if needed */}
                <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </form>
        </div>
    );
};

