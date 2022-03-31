import React, { useEffect, useState } from 'react';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friends = () => {
    const [friends, setFriend] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])

    return (
        <div>
            <hr />
            <h2>Friend List</h2>
            <p>make list female and male</p>
            <p>friends number: {friends.length}</p>
            {
                friends.map(friend => <SingleFriend
                friend={friend}
                key={friend.id}
                ></SingleFriend>)
            }
        </div>
    );
};

export default Friends;