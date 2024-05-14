import React, { useEffect, useState } from "react";
import style from './PostList.module.css'

export const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDeletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleAddPost = () => {
        const newPost = {
            id: posts.length + 1,
            title: inputValue,
            completed: false
        };
        setPosts([...posts, newPost]);
        setInputValue('');
    };


    return (
        <div>
            {posts.length === 0 ? (
                <p>Loading Posts...</p>
            ) : (
            <div className={style.containerPost}>
                <ul>
                    {posts.map((post, index) => (
                        <li key={post.id} className={style.postWrap}>
                        <div className={style.postWrapPost}>
                            <h3 className={style.postWrapPostTitle}>{index + 1}. {post.title}</h3>
                            <p className={style.postWrapPostText}>{post.body}</p>
                        </div>
                        <div>
                        <button className={style.postWrapButton}>Открыть</button>
                        <button onClick={() => handleDeletePost(post.id)} className={style.postWrapButton}>Удалить</button>
                        </div>
                        </li>
                    ))}
                </ul>
                <div className={style.addPost}>
                <input style={{ color: 'black', backgroundColor: 'white', marginTop: '20px', marginBottom: '20px', paddingLeft: '5px' }} type="text" value={inputValue} onChange={handleInputChange} />
                <button className={style.addPostButton} onClick={handleAddPost} type="button">Add Post</button>
                </div>
            </div>
            )}
        </div>
    );
};