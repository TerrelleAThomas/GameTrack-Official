import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is installed using `npm install axios`

const notifyUser = (s) => {

};
export default function PostCommentModeration() {
    const [comments, setComments] = useState([]);
    const [flaggedComments, setFlaggedComments] = useState([]); // New state for flagged comments

    useEffect(() => {
        const fetchComments = () => {

        };
        fetchComments();
        fetchFlaggedComments(); // Fetch flagged comments as well
    }, []);

    // Existing code ...

    // New function to fetch flagged comments
    const fetchFlaggedComments = async () => {
        try {
            const response = await axios.get('/api/flags');
            setFlaggedComments(response.data);
        } catch (error) {
            notifyUser('Error fetching flagged comments: ' + error.message);
        }
    };

    // Update the flagPostComment function
    const flagPostComment = async (commentId) => {
        try {
            const flagData = {
                commentId: commentId,
                // Add additional data as needed
            };
            await axios.post('/api/flags', flagData);
            // Optionally update state to reflect the flagged comment
            setFlaggedComments([...flaggedComments, comments.find(comment => comment.id === commentId)]);
            notifyUser('The post/comment has been flagged for review.');
        } catch (error) {
            notifyUser('Error flagging post/comment: ' + error.message);
        }
    };

    // Existing code ...

    return (
        <div className="container">
            // Existing code ...

            {/* Flagged Content Section */}
            <div className="flagged-list">
                <h2 className="text-center mb-4">Flagged Content</h2>
                <div id="flagged-comments-container">
                    {flaggedComments.map((comment) => (
                        <div className="flagged-comment-card" key={comment.id}>
                            <h5>{comment.userName}</h5>
                            <p>{comment.content}</p>
                            <small>Flagged on: {comment.flaggedDate}</small>
                            {/* Additional actions like unflag or remove could be added here */}
                        </div>
                    ))}
                </div>
            </div>

            // Existing code ...
        </div>
    );
}
