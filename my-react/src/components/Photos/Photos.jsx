import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.error('Error fetching photos:', error));
    }, [albumId]);

    return (
        <div>
            <h1>Photo List</h1>
            {photos.map(photo => (
                <div key={photo.id}>
                    <p>{photo.title}</p>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
            ))}
        </div>
    );
};

export default Photos;
