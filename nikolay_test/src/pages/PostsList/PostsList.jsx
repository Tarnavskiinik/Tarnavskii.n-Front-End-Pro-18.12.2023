import React, { useState, useEffect } from "react";
import style from './PostList.module.css';
import { useNavigate } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";

export const PostsList = () => {
    const { data: fetchedPosts, loading, error } = useGetData('https://jsonplaceholder.typicode.com/posts');
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (fetchedPosts) {
            setPosts(fetchedPosts);
        }
    }, [fetchedPosts]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const openPagePost = (postId) => {
        navigate(`/posts-page/${postId}`);
    };

    const handleAddPost = () => {
        const newPost = {
            id: Date.now(),
            title: inputValue,
            completed: false
        };
        setPosts([...posts, newPost]);
        setInputValue('');
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };

    if (loading) {
        return <p>Loading Posts...</p>;
    } else if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <div className={style.containerPost}>
                <ul>
                    {posts.map((post, index) => (
                        <li key={post.id} className={style.postWrap}>
                            <div className={style.postWrapPost}>
                                <h3 className={style.postWrapPostTitle}>{index + 1}. {post.title}</h3>
                                <p className={style.postWrapPostText}>{post.body}</p>
                            </div>
                            <div>
                                <button onClick={() => openPagePost(post.id)} className={style.postWrapButton}>Открыть</button>
                                <button onClick={() => handleDeletePost(post.id)} className={style.postWrapButton}>Удалить</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={style.addPost}>
                    <input
                        style={{ color: 'black', backgroundColor: 'white', marginTop: '20px', marginBottom: '20px', paddingLeft: '5px' }}
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className={style.addPostButton} onClick={handleAddPost} type="button">Add Post</button>
                </div>
            </div>
        </div>
    );
};