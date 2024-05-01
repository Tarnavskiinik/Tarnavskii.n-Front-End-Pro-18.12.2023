import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Album = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error('Error fetching albums:', error));
    }, [userId]);

    return (
        <div>
            <h1>Album List</h1>
            {albums.map(album => (
                <div key={album.id}>
                    <p>{album.title}</p>
                    <Link to={`/photos/${album.id}`}>Photos</Link>
                </div>
            ))}
        </div>
    );
};

export default Album;
