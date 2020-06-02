import React from 'react';
import ReactDOM from 'react-dom';

export default Note;

function Note(){
   return <div className='note'>
        <h1>
        This is the note title
        </h1>
        <p>
        This is the note content
        </p>
    </div>
}