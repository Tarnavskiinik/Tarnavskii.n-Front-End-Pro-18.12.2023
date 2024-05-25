import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import style from './PostPage.module.css';
import { useGetData } from "../../hooks/useGetData";
import { setPosts } from "../../redux/Posts/PostsSlice";
import { useSelector } from "react-redux";

export const PostPage = () => {
    const { postId } = useParams();
    const posts = useSelector(state => state.posts.posts)
    const post = posts.find((post) => post.id === Number(postId))
    
    return (
        <div>
            <h3 className={style.postWrapPostTitle}>{post.title}</h3>
            <p className={style.postWrapText}>{post.body}</p>
            <div>

                {/* {commentsPost && commentsPost.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.body}</p>
                    </div>
                ))} */}
            </div>
        </div>
    );
};