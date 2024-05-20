import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import style from './PostPage.module.css'
import { useGetData } from "../../hooks/useGetData";

export const PostPage = () => {
    const { postId } = useParams();
    const {data:post , loading:postLoading, error: postError} = useGetData(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const {data:commentsPost , loading:commentsLoading, error: commentsError} = useGetData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

    if (postLoading || commentsLoading) return <div>Loading...</div>;
    if (postError || commentsError) return <div>Error: {postError || commentsError}</div>;

    return (
        <div>
            <h3 className={style.postWrapPostTitle}>{post.title}</h3>
            <p className={style.postWrapText}>{post.body}</p>
            <div>
                {commentsPost.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};