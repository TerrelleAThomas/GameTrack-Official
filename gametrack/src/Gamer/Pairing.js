import React from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function GamingInterestPairingForm () {

    return (
        <div className="container">
            <h2 className="center-content">Gaming Interest Pairing Form</h2>
            <form action="nextpage.html" method="GET">
                {/* Age */}
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" className="form-control" id="age" required />
                </div>
                {/* Gaming Preferences - Favorite Game Genres (Dropdown) */}
                <div className="form-group">
                    <label htmlFor="favoriteGenres">Favorite Game Genres:</label>
                    <select className="form-control custom-dropdown" id="favoriteGenres" single>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>RPG</option>
                        <option>Strategy</option>
                        <option>Sports</option>
                        <option>Simulation</option>
                        {/* Add more genres as needed */}
                    </select>
                </div>
                {/* Gaming Preferences - Favorite Games */}
                <div className="form-group">
                    <label htmlFor="favoriteGames">Favorite Games:</label>
                    <input type="text" className="form-control" id="favoriteGames" placeholder="E.g. The Witcher 3, Fortnite" />
                </div>
                {/* Gaming Preferences - Multiplayer/Single-player */}
                <div className="form-group">
                    <label htmlFor="multiplayer">Preference (Multiplayer/Single-player):</label>
                    <select className="form-control" id="multiplayer">
                        <option>Multiplayer</option>
                        <option>Single-player</option>
                    </select>
                </div>
                {/* Time Availability for Gaming */}
                <div className="form-group">
                    <label htmlFor="timeAvailability">Time Availability for Gaming:</label>
                    <select className="form-control" id="timeAvailability">
                        <option>Mornings</option>
                        <option>Afternoons</option>
                        <option>Evenings</option>
                        <option>Weekends</option>
                        <option>Flexible</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                {/* Preferred Gaming Style */}
                <div className="form-group">
                    <label htmlFor="gamingStyle">Preferred Gaming Style:</label>
                    <select className="form-control custom-dropdown" id="gamingStyle">
                        <option>Competitive</option>
                        <option>Casual</option>
                        <option>Cooperative</option>
                        <option>Explorative</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="additionalComments">Additional Comments:</label>
                    <textarea className="form-control" id="additionalComments" rows="3"></textarea>
                </div>
                {/* Consent and Terms */}
                <div className="form-group form-check center-content">
                    <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                    <label className="form-check-label" htmlFor="agreeTerms">I agree to share this information for pairing purposes.</label>
                </div>
                {/* Centered Submit Button */}
                <div className="center-content">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};
