import React from 'react';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function GameManagement () {
    const deleteGame = (event) => {
        const gameCard = event.target.closest('.game-card');
        if (gameCard) {
            gameCard.remove();
            notifyUser('The game has been deleted.');
        }
    };

    const notifyUser = (message) => {
        alert(message);
        // You can customize the notification method (e.g., modal, toast) based on your UI design
    };

    return (
        <div style={{ backgroundImage: "url('game_management_bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', margin: 0, padding: 0, color: '#fff' }}>
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="game-list">
                            <h2 className="text-center mb-4">Game Management</h2>

                            {/* Search Bar */}
                            <div className="input-group mb-3 search-bar">
                                <input type="text" className="form-control" placeholder="Search for games..." aria-label="Search" aria-describedby="search-btn" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="search-btn">Search</button>
                                </div>
                            </div>

                            {/* Example Game Card (Repeat for each game) */}
                            <div className="game-card">
                                <h5>Game Title</h5>
                                <p>Description of the game goes here...</p>
                                <small>Release Date: January 1, 2022</small>
                                <div className="text-right">
                                    <button className="btn btn-danger" onClick={deleteGame}>Delete</button>
                                </div>
                            </div>
                            {/* End of Example Game Card */}

                            {/* Repeat the above card structure for each game */}
                        </div>

                        <a href="admin-dashboard.html" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
