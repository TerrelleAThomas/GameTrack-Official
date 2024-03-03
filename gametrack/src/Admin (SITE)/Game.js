import React from 'react';
import axios from 'axios'; // Make sure to install axios with `npm install axios` or `yarn add axios`

export default function GameManagement() {
    const deleteGame = async (gameId) => {
        try {
            await axios.delete(`/api/games/${gameId}`);
            removeGameCard(gameId);
            notifyUser('The game has been deleted.');
        } catch (error) {
            notifyUser('Error deleting the game: ' + error.message);
        }
    };

    const removeGameCard = (gameId) => {
        const gameCard = document.getElementById(`game-card-${gameId}`);
        if (gameCard) {
            gameCard.remove();
        }
    };

    const notifyUser = (message) => {
        alert(message); // Customize notification as needed
    };

    // Replace this with actual game data retrieval logic
    const games = [
        // This is a placeholder. Your actual game data would come from state, props, or an API call
        { id: '1', title: 'Game Title', description: 'Description of the game...', releaseDate: 'January 1, 2022' },
        // ... other games
    ];

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

                            {/* Game Cards */}
                            {games.map(game => (
                                <div className="game-card" id={`game-card-${game.id}`} key={game.id}>
                                    <h5>{game.title}</h5>
                                    <p>{game.description}</p>
                                    <small>Release Date: {game.releaseDate}</small>
                                    <div className="text-right">
                                        <button className="btn btn-danger" onClick={() => deleteGame(game.id)}>Delete</button>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <a href="admin-dashboard.html" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
