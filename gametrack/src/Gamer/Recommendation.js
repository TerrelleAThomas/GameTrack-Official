import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is installed using `npm install axios`

const API_BASE_URL = 'http://localhost:8080/api/games'; // Update with the correct base URL of your backend

export default function RecommendedGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            setGames(response.data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Recommended Games</h2>
            <div className="row" id="gameList">
                {games.map((game, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            {/* Assuming 'image' would be a URL to the game's image */}
                            <img src={game.image || 'placeholder-image-url.jpg'} className="card-img-top" alt={game.title} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{game.title}</h5>
                                {/* Add a check for each field in case it's not provided */}
                                {game.description && <p className="card-text">{game.description}</p>}
                                {game.genre && <p className="card-text">Genre: {game.genre}</p>}
                                {game.releaseDate && <p className="card-text">Release Date: {new Date(game.releaseDate).toLocaleDateString()}</p>}
                                {/* Buttons or other interactive elements can go here */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
