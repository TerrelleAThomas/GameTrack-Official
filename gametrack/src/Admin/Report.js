import React, { useState } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function AdminReports () {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPlays, setTotalPlays] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);

    function generateReports() {
        // Assume you have Firebase SDK loaded, and you can interact with Firebase to fetch reports
        // Replace the following logic with your actual implementation

        // Get input values
        const startDateValue = document.getElementById('startDate').value;
        const endDateValue = document.getElementById('endDate').value;

        // Fetch game play report
        const gamePlayReport = fetchGamePlayReport(startDateValue, endDateValue);
        setTotalPlays(gamePlayReport.totalPlays);

        // Fetch post report
        const postReport = fetchPostReport(startDateValue, endDateValue);
        setTotalPosts(postReport.totalPosts);
    }

    // Replace the following functions with your actual logic to fetch reports from Firebase
    function fetchGamePlayReport(startDate, endDate) {
        // Example: Fetch game play report from Firebase
        // Use startDate and endDate in your query to fetch data within the specified time period
        return {
            totalPlays: 500, // Replace with the actual total plays
        };
    }

    function fetchPostReport(startDate, endDate) {
        // Example: Fetch post report from Firebase
        // Use startDate and endDate in your query to fetch data within the specified time period
        return {
            totalPosts: 1500, // Replace with the actual total posts
        };
    }

    return (
        <div style={{ backgroundImage: "url('admin_reports_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', margin: 0, padding: 0, color: '#fff' }}>
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="report-card">
                            <h2 className="text-center mb-4">Admin Reports</h2>

                            {/* Report: Total number of times a game has been played */}
                            <div className="report-results">
                                <h4>Report: Total number of times a game has been played</h4>
                                <p>Time Period: January 1, 2023 - April 18, 2023</p>
                                <p>Total Plays: <span id="totalPlays">{totalPlays}</span></p>
                            </div>

                            {/* Report: Total number of posts for a time period */}
                            <div className="report-results">
                                <h4>Report: Total number of posts for a time period</h4>
                                <p>Time Period: January 18, 2023 - April 18, 2023</p>
                                <p>Total Posts: <span id="totalPosts">{totalPosts}</span></p>
                            </div>

                            {/* Report Form */}
                            <form>
                                <div className="form-group">
                                    <label htmlFor="startDate">Start Date:</label>
                                    <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDate">End Date:</label>
                                    <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                                </div>
                                {/* Generate Reports Button */}
                                <button type="button" className="btn btn-primary btn-block" onClick={generateReports}>Generate Reports</button>
                            </form>
                        </div>

                        <a href="admin-dashboard.html" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
