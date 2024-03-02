import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function PostPage () {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState(null);
    const [commentContent, setCommentContent] = useState({});

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        // Assume the API returns posts along with their comments
        const response = await axios.get('/api/posts');
        setPosts(response.data);
    };

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('content', postContent);
        if (postImage) {
            formData.append('image', postImage);
        }

        await axios.post('/api/posts', formData);
        setPostContent('');
        setPostImage(null);
        loadPosts();
    };

    const handleCommentSubmit = async (postId) => {
        const content = commentContent[postId];
        await axios.post(`/api/posts/${postId}/comments`, { content });
        setCommentContent({ ...commentContent, [postId]: '' }); // Reset comment input for this post
        loadPosts();
    };

    const handleImageChange = (event) => {
        setPostImage(event.target.files[0]);
    };

    return (
        <div className="container mt-4">
            <h2>Create a Post</h2>
            <form onSubmit={handlePostSubmit}>
                <textarea className="form-control mb-2" value={postContent} onChange={(e) => setPostContent(e.target.value)} rows="3" placeholder="What's on your mind?"></textarea>
                <input type="file" className="form-control mb-2" onChange={handleImageChange} accept="image/*" />
                <button type="submit" className="btn btn-primary">Post</button>
            </form>

            {posts.map((post) => (
                <div key={post.id} className="post mb-3">
                    <h5>{post.title}</h5>
                    <p>{post.content}</p>
                    {post.imageUrl && <img src={post.imageUrl} alt="Post" className="img-fluid mb-2" />}
                    <div>
                        {post.comments && post.comments.map((comment) => (
                            <div key={comment.id} className="comment mb-2">{comment.content}</div>
                        ))}
                        <textarea className="form-control mb-2" value={commentContent[post.id] || ''} onChange={(e) => setCommentContent({ ...commentContent, [post.id]: e.target.value })} placeholder="Write a comment..."></textarea>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleCommentSubmit(post.id)}>Comment</button>
                    </div>
                </div>
            ))}
        </div>
    );

}
