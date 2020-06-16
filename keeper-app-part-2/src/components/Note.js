import React from "react";

function Note(pront) {
  return (
    <div className="note">
      
      <h1>{pront.title}</h1>
      <p>{pront.content}</p>
    </div>
  );
}

export default Note;
