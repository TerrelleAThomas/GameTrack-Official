import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is installed using `npm install axios`

export default function PostCommentModeration() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            // Replace with your actual endpoint to fetch comments
            const response = await axios.get('/api/comments');
            setComments(response.data);
        } catch (error) {
            notifyUser('Error fetching comments: ' + error.message);
        }
    };

    const removePostComment = async (commentId) => {
        try {
            await axios.delete(`/api/comments/${commentId}`);
            setComments(comments.filter(comment => comment.id !== commentId));
            notifyUser('The post/comment has been removed.');
        } catch (error) {
            notifyUser('Error removing post/comment: ' + error.message);
        }
    };

    const flagPostComment = async (commentId) => {
        try {
            const flagData = {
                commentId: commentId,
                // Add additional data as needed
            };
            await axios.post('/api/flags', flagData);
            // Optionally update state to reflect the flagged comment
            notifyUser('The post/comment has been flagged for review.');
        } catch (error) {
            notifyUser('Error flagging post/comment: ' + error.message);
        }
    };

    const notifyUser = (message) => {
        alert(message);
        // Customize this with a more sophisticated notification system if desired
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="moderation-list">
                        <h2 className="text-center mb-4">Post/Comment Moderation</h2>
                        <div id="comments-container">
                            {comments.map((comment) => (
                                <div className="post-comment-card" key={comment.id}>
                                    <h5>{comment.userName}</h5>
                                    <p>{comment.content}</p>
                                    <small>Posted on: {comment.postedDate}</small>
                                    <div className="action-buttons">
                                        <button className="btn btn-danger" onClick={() => removePostComment(comment.id)}>Remove</button>
                                        <button className="btn btn-warning" onClick={() => flagPostComment(comment.id)}>Flag</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Flagged Content Section */}
                    <div className="flagged-list">
                        <h2 className="text-center mb-4">Flagged Content</h2>
                        {/* Flagged content will be displayed here */}
                    </div>

                    {/* Removed Content Section */}
                    <div className="removed-list">
                        <h2 className="text-center mb-4">Removed Content</h2>
                        {/* Removed content will be displayed here */}
                    </div>

                    <a href="SiteAdminDashboard /" className="btn btn-secondary btn-block">Back to Admin Dashboard</a>
                </div>
            </div>
        </div>
    );
}
