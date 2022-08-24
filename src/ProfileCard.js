import React from 'react';
import './App.css';

import Avatar from './Avatar'
import UserProfile from './UserProfile'

function ProfileCard({userObjSm}) {
    const name = userObjSm?.first_name + " " + userObjSm?.last_name;
    return (
        <div className='profile_card' key = {userObjSm?.id}>
            <Avatar name = {name} img = {userObjSm?.avatar}/>
            <UserProfile name = {name} write = {userObjSm?.email}/>
        </div>
    )
}

export default ProfileCard

