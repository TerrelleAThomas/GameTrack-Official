import React, { useState, useEffect } from 'react';
// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import {firebaseConfig} from "../pages/FirebaseConfig";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function RecommendedGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Fetch game recommendations from Firebase
        const gamesRef = ref(database, 'games');
        get(gamesRef).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const gameList = Object.values(data);
                setGames(gameList);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Recommended Games</h2>
            <div className="row" id="gameList">
                {games.map((game, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src={game.image} className="card-img-top" alt={game.title} />
                            <div className="card-body">
                                <h5 className="card-title">{game.title}</h5>
                                <p className="card-text">Release Date: {game.releaseDate}</p>
                                <p className="card-text">Genre: {game.genre}</p>
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
