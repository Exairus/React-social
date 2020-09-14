import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img src="https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>  
        </div>
    )
}

export default Post;