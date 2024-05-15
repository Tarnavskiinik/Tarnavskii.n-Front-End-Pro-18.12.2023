import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import style from './PostPage.module.css'

export const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error("Error fetching post:", error));
        
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error("Error fetching comments:", error));
    }, [postId]);

    return (
        <div>
            <h3 className={style.postWrapPostTitle}>{post.title}</h3>
            <p className={style.postWrapText}>{post.body}</p>
            <div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};