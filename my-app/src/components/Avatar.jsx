import React from 'react';

export default Avatar;

function Avatar(propst){
    return <img 
    className='circle-img'
    src={propst.img}
    alt="avatar_img"
  />
}