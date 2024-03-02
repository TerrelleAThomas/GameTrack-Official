import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function AboutUs () {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="section">
                        <h2>Welcome to GamTrack</h2>
                        <p>Your personalized gaming companion! Developed by Tech Tribe, a dedicated software development firm based in the vibrant state of Arizona, GameTrackr is designed to enhance your gaming experience and connect you with like-minded players.</p>
                    </div>

                    <div className="section">
                        <h4>Our Mission</h4>
                        <p>At GamTrack, we understand that gaming is more than just a hobby; it's a community. Our mission is to foster connections among gamers by providing a platform that not only tracks the games you play or watch but also introduces you to fellow players who share your interests.</p>
                    </div>

                    <div className="section">
                        <h4>Key Features</h4>
                        <ol>
                            <li>Game Tracking:
                                <ul>
                                    <li>Easily log and track the video games you play or watch. GamTrack keeps a detailed record of your gaming journey.</li>
                                </ul>
                            </li>
                            <li>Enhanced Matchmaking Algorithms:
                                <ul>
                                    <li>Our advanced algorithms ensure precise game recommendations.</li>
                                    <li>Discover new gaming buddies tailored to your preferences.</li>
                                </ul>
                            </li>
                            <li>Seamless Cross-Platform Integration:
                                <ul>
                                    <li>Track your games across multiple platforms.</li>
                                    <li>Enjoy a consistent experience on desktop, tablet, and mobile.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div className="section">
                        <h4>About Tech Tribe</h4>
                        <p>GamTrack is a proud creation of Tech Tribe, a forward-thinking software development company nestled in the heart of Arizona. Our team of passionate developers is committed to crafting innovative solutions that bring people together. We believe in the power of technology to enhance and enrich lives, and GameTrackr is a testament to that belief.</p>
                    </div>

                    <div className="section">
                        <h4>Join the GamTrack Community</h4>
                        <p>Embark on a journey of shared experiences, thrilling victories, and unforgettable moments. GameTrackr is more than an application; it's a community where gamers unite. Join us and let's level up together.</p>
                        <div className="center-btn">
                            <a href="#" className="btn btn-primary purple-btn">Let's Start</a> {/* Replace # with the actual link */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}