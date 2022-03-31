import React from 'react';
import { Link } from 'react-router-dom';

//import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to My fancy React Router with Header!</h1>
            <nav>
                {/* <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/friend">Friend</CustomLink>
            */}
                <Link to="/">Home</Link>
                <Link to="/friends">Friend</Link>
                <Link to="/about">About</Link>
                
            </nav>

        </div>
    );
};

export default Header;