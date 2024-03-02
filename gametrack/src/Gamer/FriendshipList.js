import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { firebaseConfig } from '../pages/FirebaseConfig'; // Adjust the path as necessary

export default function FriendshipPage() {
    const [friends, setFriends] = useState([]);

    // Initialize Firebase outside of useEffect if you're using it across multiple functions
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    useEffect(() => {
        // Fetch friends data from Firebase
        const fetchFriends = async () => {
            const friendsRef = collection(db, 'friends');
            const snapshot = await getDocs(friendsRef);
            const friendList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFriends(friendList);
        };

        fetchFriends();
    }, [db]); // db is a dependency here

    const deleteFriend = async (id) => {
        await deleteDoc(doc(db, 'friends', id));
        setFriends(friends.filter(friend => friend.id !== id));
    };

    const acceptRequest = async (id) => {
        const friendRef = doc(db, 'friends', id);
        await updateDoc(friendRef, {
            status: 'accepted'
        });
        // Optionally, refresh the friends list or update the local state to reflect this change
    };

    const rejectRequest = async (id) => {
        const friendRef = doc(db, 'friends', id);
        await updateDoc(friendRef, {
            status: 'rejected'
        });
        // Optionally, refresh the friends list or update the local state to reflect this change
    };

    return (
        <div className="container">
            <h2 className="mb-4">Friendship Page</h2>
            <div className="row" id="friend-cards">
                {friends.map((friend) => (
                    <div key={friend.id} className="col-md-6">
                        <div className="friend-card">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h5>{friend.username}</h5>
                                    <p>Email: {friend.email}</p>
                                    <p>Location: {friend.location}</p>
                                </div>
                                <div className="col-4 text-right">
                                    <button className="btn btn-danger mr-2" onClick={() => deleteFriend(friend.id)}>Delete</button>
                                    <button className="btn btn-success mr-2" onClick={() => acceptRequest(friend.id)}>Accept</button>
                                    <button className="btn btn-secondary mr-2" onClick={() => rejectRequest(friend.id)}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
