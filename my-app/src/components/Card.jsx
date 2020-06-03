import React from 'react';
import Avatar from './Avatar';
import Detail from './detail'
export default Card;

function Card(propst){

    return <div className="card">
           <div className="top">
             <h2 className='name'>{propst.name}</h2>
            <Avatar img={propst.img} />
           </div>
           <div className="bottom">
            <Detail data={propst.tel} />
            <Detail data={propst.email} />
           </div>
         </div>
   }
   