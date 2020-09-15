import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postData = [
        {id: '1', post: 'Hi, how are you?', likes: 20},
        {id: '2', post: "It's my first post", likes: 30}
    ];

    return(
        <div className={classes.content}>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div>
                        <button>Add post</button>
                    </div>      
                </div>
                <div className={classes.posts}>
                    <Post message={postData[0].post} likes={postData[0].likes} />
                    <Post message={postData[1].post} likes={postData[1].likes} />
                </div>  
            </div>
            
        </div>
    )
}

export default MyPosts;