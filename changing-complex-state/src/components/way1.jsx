import React, {useState} from "react";

function App() {

  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');

  return (
    <div className="container">
      <h1>Hello {Fname} {Lname}</h1>
      <form>
        <input name="fName" onChange={event => setFname(event.target.value)} placeholder="First Name" value={Fname} />
        <input name="lName" onChange={event => setLname(event.target.value)} placeholder="Last Name" value={Lname} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
