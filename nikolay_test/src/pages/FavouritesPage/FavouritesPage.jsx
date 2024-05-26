import {React , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../../redux/Posts/PostsSlice";
import style from './FavouritesPage.module.css'

export const FavouritesPage = () => {
    const favourites = useSelector(state => state.posts.favourites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (favourites.length === 0) {
            navigate('/posts');
        }
    }, [favourites]);

    const handleRemoveFavourite = (postId) => {
        dispatch(removeFavourite(postId));
    };

    const openPagePost = (postId) => {
        navigate(`/posts-page/${postId}`, { state: { postId } });
    };

    return (
        <div className={style.container}>
            <h2>Избранные посты</h2>
            <ul>
                {favourites.map((post, index) => (
                    <li key={post.id} className={style.postWrap}>
                        <div className={style.postWrapPost}>
                            <h3 className={style.postWrapPostTitle}>{index + 1}. {post.title}</h3>
                            <p className={style.postWrapPostText}>{post.body}</p>
                        </div>
                        <div className={style.postWrapContainer}>
                            <button onClick={() => openPagePost(post.id)} className={style.postWrapButton}>Открыть</button>
                            <button onClick={() => handleRemoveFavourite(post.id)} className={style.postWrapButton}>Удалить из избранного</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};