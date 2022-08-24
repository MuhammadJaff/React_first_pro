import React from 'react'

function Avatar({name,img}) {
    return (
        <div>
            <img src={img} alt={name}/>
        </div>
    )
}

export default Avatar
