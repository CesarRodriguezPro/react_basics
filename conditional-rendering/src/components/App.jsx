import React from "react";
import Login from './login';

var isLogginIn = false;
const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
      return <div className = "container" >  

      // two difference way to use this function please use code
        {isLogginIn === true ? <h1> hello </h1> : <Login />}
        {currentTime > 12 && <h1>Why are you still working </h1>}
      </div>
    }

    export default App;