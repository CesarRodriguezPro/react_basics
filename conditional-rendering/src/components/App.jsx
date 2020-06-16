import React from "react";
import login from './login';

var isLogginIn = false;

function renderConditional() {
  if (isLogginIn) {
    return ( <h1> Hello </h1>)
    }
    else {
      return <login />
      }
    }

    function App() {
      return (<div className = "container" > {
          renderConditional()
        } </div>
      );
    }

    export default App;