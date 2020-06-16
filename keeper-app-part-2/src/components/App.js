import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />

      {notes.map(singleItem => <Note title={singleItem.title} content={singleItem.content} key={singleItem.key}/>)}
     
      <Footer />
    </div>
  );
}

export default App;
