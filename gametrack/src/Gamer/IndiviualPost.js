import React from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function UserPostsPage () {
    return (
        <div className="container mt-5">
            {/* User Posts Header */}
            <div className="mb-4">
                {/* Page Title */}
                <h2 className="mb-3">Your Posts</h2>

                {/* Action Buttons */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    {/* Placeholder buttons (customize with actual functionality) */}
                    <button className="btn btn-success me-md-2">Add Post</button>
                    <button className="btn btn-danger me-md-2">Delete Post</button>
                    <button className="btn btn-primary">Back to Profile</button>
                </div>
            </div>
            {/* End User Posts Header */}

            {/* User Uploaded Posts */}
            {/* Example Post 1 */}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-2 bg-light">
                        <div className="text-center mt-3">
                            <img className="rounded" src="user1.jpg" alt="user icon" />
                            <p>User123</p>
                            <small className="text-muted">January 30, 2024</small>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">Great Nature Escape</h5>
                            <p className="card-text">Had an incredible time in nature, surrounded by mountains and lakes.
                                Nature is truly magnificent!</p>
                            <div className="mt-3">
                                <h6>Comments:</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>User456:</strong> Nature is the best escape!
                                    </li>
                                    <li>
                                        <strong>OutdoorLover:</strong> Which location did you visit? Looks amazing!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Example Post 1 */}

            {/* Example Post 2 */}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-2 bg-light">
                        <div className="text-center mt-3">
                            <img className="rounded" src="user2.jpg" alt="user icon" />
                            <p>AdventureExplorer</p>
                            <small className="text-muted">January 28, 2024</small>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">City Lights at Night</h5>
                            <p className="card-text">Captured the stunning city lights at night. The city comes alive when
                                the sun goes down!</p>
                            <div className="mt-3">
                                <h6>Comments:</h6>
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>NightPhotographer:</strong> Beautiful shot! What camera did you use?
                                    </li>
                                    <li>
                                        <strong>CityLover:</strong> This makes me want to visit the city at night!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Example Post 2 */}

            {/* Additional User Uploaded Posts Can Be Added Here */}

        </div>
    );
}
