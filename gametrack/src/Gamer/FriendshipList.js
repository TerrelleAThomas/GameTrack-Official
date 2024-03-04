import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install axios with npm or yarn

export default function FriendshipPage() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Fetch friends data from the back-end API
        const fetchFriends = async () => {
            try {
                const response = await axios.get('/api/friendships');
                setFriends(response.data);
            } catch (error) {
                console.error("Error fetching friends:", error);
                // Handle error
            }
        };

        fetchFriends();
    }, []); // Removed db dependency

    const deleteFriend = async (id) => {
        try {
            await axios.delete(`/api/friendships/${id}`);
            setFriends(friends.filter(friend => friend.friendshipId !== id));
        } catch (error) {
            console.error("Error deleting friend:", error);
            // Handle error
        }
    };

    const acceptRequest = async (id) => {
        try {
            const response = await axios.put(`/api/friendships/${id}`, {
                status: 'accepted'
            });
            // Update local state with the updated friend object
            setFriends(friends.map(friend => friend.friendshipId === id ? response.data : friend));
        } catch (error) {
            console.error("Error accepting friend request:", error);
            // Handle error
        }
    };

    const rejectRequest = async (id) => {
        try {
            const response = await axios.put(`/api/friendships/${id}`, {
                status: 'rejected'
            });
            // Update local state with the updated friend object
            setFriends(friends.map(friend => friend.friendshipId === id ? response.data : friend));
        } catch (error) {
            console.error("Error rejecting friend request:", error);
            // Handle error
        }
    };

    return (
        <div className="container">
            <h2 className="mb-4">Friendship Page</h2>
            <div className="row" id="friend-cards">
                {friends.map((friend) => (
                    <div key={friend.friendshipId} className="col-md-6">
                        <div className="friend-card">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h5>{friend.username}</h5>
                                    <p>Email: {friend.email}</p>
                                    <p>Location: {friend.location}</p>
                                </div>
                                <div className="col-4 text-right">
                                    <button className="btn btn-danger mr-2" onClick={() => deleteFriend(friend.friendshipId)}>Delete</button>
                                    <button className="btn btn-success mr-2" onClick={() => acceptRequest(friend.friendshipId)}>Accept</button>
                                    <button className="btn btn-secondary mr-2" onClick={() => rejectRequest(friend.friendshipId)}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
