import React, { useState } from 'react';


export default function AdminReports() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportType, setReportType] = useState(''); // Added state for report type
    const [totalPlays, setTotalPlays] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);

    async function generateReports() {
        if (!startDate || !endDate || !reportType) {
            alert('Please fill in all fields.');
            return;
        }
    }

    function navigateToAdminDashboard() {
        history.push('/admin-dashboard');
    }

    return (
        <div style={{ backgroundImage: "url('admin_reports_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', margin: 0, padding: 0, color: '#fff' }}>
            <div className="container" style={{ paddingTop: '50px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="report-card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px' }}>
                            <h2 className="text-center mb-4">Admin Reports</h2>

                            <div className="report-results">
                                <h4>Report: Total number of times a game has been played</h4>
                                <p>Total Plays: {totalPlays}</p>
                            </div>

                            <div className="report-results">
                                <h4>Report: Total number of posts for a time period</h4>
                                <p>Total Posts: {totalPosts}</p>
                            </div>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="startDate">Start Date:</label>
                                    <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="endDate">End Date:</label>
                                    <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="reportType">Report Type:</label>
                                    <input type="text" className="form-control" id="reportType" value={reportType} onChange={(e) => setReportType(e.target.value)} required />
                                </div>

                                <button type="button" className="btn btn-primary btn-block" onClick={generateReports}>Generate Reports</button>
                            </form>

                            <button onClick={navigateToAdminDashboard} className="btn btn-secondary btn-block mt-4">Back to Admin Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
