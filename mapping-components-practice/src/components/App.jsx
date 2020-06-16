import React from "react";
import Entry from "./Entry";
import emojipedia from '../emojipedia'


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        <dl className="dictionary">
              {emojipedia.map(item => (<Entry title={item.name} definition={item.meaning} simbol={item.emoji} />))}  
        </dl>
    </div>
  );
}

export default App;
