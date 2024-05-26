import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import style from './PostPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "../../redux/Comments/Comments";

export const PostPage = () => {
    const { postId } = useParams();
    const posts = useSelector(state => state.posts.posts);
    const post = posts.find((post) => post.id === Number(postId));
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [editCommentId, setEditCommentId] = useState(null);
    const comments = useSelector(state => state.comments.comments);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddComments = () => {
        if (editCommentId) {
            const updatedComments = comments.map(comment =>
                comment.id === editCommentId ? { ...comment, body: inputValue } : comment
            );
            dispatch(setComments(updatedComments));
            setEditCommentId(null);
        } else {
            const newComment = {
                id: Date.now(),
                body: inputValue,
                completed: false
            };
            dispatch(setComments([...comments, newComment]));
        }
        setInputValue('');
    };

    const handleEditComment = (commentId, commentBody) => {
        setInputValue(commentBody);
        setEditCommentId(commentId);
    };

    const handleDeleteComment = (commentId) => {
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        dispatch(setComments(updatedComments));
    };

    return (
        <div>
            <h3 className={style.postWrapPostTitle}>{post.title}</h3>
            <p className={style.postWrapText}>{post.body}</p>
            <div>
                {comments.map((comment) => (
                    <div key={comment.id} className={style.comment}>
                        <p>{comment.body}</p>
                        <div className={style.blockButtons}>
                        <button className={style.editButton} onClick={() => handleEditComment(comment.id, comment.body)}>Edit</button>
                        <button className={style.deleteButton} onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                        </div>
                    </div>
                ))}
                <input
                    style={{ color: 'black', backgroundColor: 'white', marginTop: '20px', marginBottom: '20px', paddingLeft: '5px' }}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button className={style.addPostButton} onClick={handleAddComments} type="button">
                    {editCommentId ? 'Update Comment' : 'Add Comment'}
                </button>
            </div>
        </div>
    );
};