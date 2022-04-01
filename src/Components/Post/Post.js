import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [ posts, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1>Every post here is to show</h1>
            <p>post length : {posts.length}</p>
            {
               posts.map(post => <Link
               key={post.id}
                 to={`/posts/${post.id}`}
                  >{post.id}</Link>) 
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;