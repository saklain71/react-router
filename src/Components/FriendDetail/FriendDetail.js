import React from 'react';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {
    const param = useParams();
    return (
        <div>
            <h2>This is details of friends</h2>
            <button>Know More about: {param.friendId}</button>
        </div>
    );
};

export default FriendDetail;