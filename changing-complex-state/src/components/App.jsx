import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });

  function handleChange(event) {
    const {value,name} = event.target; 
    setFullName(previousValue => {
      if (name === 'firstName') {
        return {
          firstName: value,
          lastName: previousValue.lastName,
        }
      } else {
        return {
          firstName: previousValue.firstName,
          lastName: value,
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
      <form>
        <input name="firstName" onChange={handleChange} placeholder="First Name" value={fullName.firsName} />
        <input name="lastName" onChange={handleChange} placeholder="Last Name" value={fullName.lastName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
