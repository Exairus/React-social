import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return(
        <div className={classes.content}>
            <div>
                <img className={classes.profileImg}src="https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;