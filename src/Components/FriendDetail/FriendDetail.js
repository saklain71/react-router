import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const param = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/users/${param.friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));

    }, [])
    return (
        <div>
            <h2>This is details of friends</h2>
            <button>Know More about: {param.friedId}</button>
            <h3> Name : {friend.name}</h3>
            <h3> Email : {friend.email}</h3>
            <h6>Website: {friend.website}</h6>
            <p>City: {friend.address?.city}</p>
            <p>Lat: {friend.address?.geo?.lat}</p>

        </div>
    );
};

export default FriendDetail;