import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div className={classes.content}>
            <div>
                my posts
                <div className={classes.posts}>
                    <Post message="Hi, how are you?" likes="15" />
                    <Post message="It's my first post" likes="20" />
                </div>  
            </div>
            
        </div>
    )
}

export default MyPosts;