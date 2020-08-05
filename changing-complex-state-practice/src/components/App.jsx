import React, { useState } from "react";

function App() {
  
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });


  function UpdateState(event) {
    const {
      name,
      value
    } = event.target;

    setContact(preInfo => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: preInfo.lName,
          email: preInfo.email,
        }
      } else if (name === 'lName') {
        return {
          fName: preInfo.fName,
          lName: value,
          email: preInfo.email,
        }
      } else {
        return {
          fName: preInfo.fName,
          lName: preInfo.lName,
          email: value,
        }
      }
    });
  }


  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={UpdateState} placeholder="First Name " value={contact.fName} />
        <input name="lName" onChange={UpdateState} placeholder="Last Name" value={contact.lName} />
        <input name="email" onChange={UpdateState} placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
