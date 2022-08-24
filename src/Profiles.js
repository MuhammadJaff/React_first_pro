import React from 'react'

import ProfileCard from './ProfileCard'

function Profiles({userObj}) {
    return userObj.map((user)=>{
        return <ProfileCard userObjSm = {user}/>
    })
}

export default Profiles
