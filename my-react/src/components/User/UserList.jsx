import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching user list:', error));
    }, []);

    return (
        <div>
            <h1>User List</h1>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <Link to={`/albums/${user.id}`}>Album</Link>
                </div>
            ))}
        </div>
    );
};

export default UserList;