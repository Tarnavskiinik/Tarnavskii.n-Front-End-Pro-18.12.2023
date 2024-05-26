import React, { useState, useEffect } from "react";
import style from './PostList.module.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPosts, addFavourite, removeFavourite } from "../../redux/Posts/PostsSlice";

export const PostsList = () => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();
    const posts = useSelector(state => state.posts.posts);
    const favourites = useSelector(state => state.posts.favourites);
    const dispatch = useDispatch();

    useEffect(() => {
        if (posts.length === 0) {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    data.forEach(post => {
                        post.comments = [];
                    });
                    dispatch(setPosts(data));
                })
                .catch(error => setError(error))
                .finally(() => setLoading(false));
        }
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputBody = (e) => {
        setBody(e.target.value);
    };

    const openPagePost = (postId) => {
        navigate(`/posts-page/${postId}`, { state: { postId } });
    };

    const handleAddPost = () => {
        const newPost = {
            id: Date.now(),
            title: inputValue,
            body: body,
            completed: false
        };

        dispatch(setPosts([...posts, newPost]));
        setInputValue('');
        setBody('');
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        dispatch(setPosts(updatedPosts));
    };

    const handleToggleFavourite = (post) => {
        if (favourites.some(fav => fav.id === post.id)) {
            dispatch(removeFavourite(post.id));
        } else {
            dispatch(addFavourite(post));
        }
    };

    const navigateToFavourites = () => {
        navigate('/favourites');
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
                                <button onClick={() => handleToggleFavourite(post)} className={style.postWrapButton}>
                                    {favourites.some(fav => fav.id === post.id) ? 'Удалить из избранного' : 'Добавить в избранное'}
                                </button>
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
                    <input
                        style={{ color: 'black', backgroundColor: 'white', marginTop: '20px', marginBottom: '20px', paddingLeft: '5px' }}
                        type="text"
                        value={body}
                        onChange={handleInputBody}
                    />
                    <button className={style.addPostButton} onClick={handleAddPost} type="button">Add Post</button>
                </div>
                <button className={style.favouritesButton} onClick={navigateToFavourites}>Перейти в избранное</button>
            </div>
        </div>
    );
};