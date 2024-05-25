import { useState, useEffect } from "react";

export const useGetData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if(posts.length === 0){
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json()
            })
            .then(data => dispatch(setPosts(data)))
            .catch(error => setError(error))
            .finally(() =>setLoading(false))
        }
    }, []);

    return { data, loading, error };
};