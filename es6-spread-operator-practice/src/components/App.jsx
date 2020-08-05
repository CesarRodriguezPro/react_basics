import React, {useState} from "react";
 

var ToDoList = [];

function App() {
  const [CurrentInput, setInput] = useState('');
  const [items,setItems] = useState([]);

  function GetInput(event){
    setInput(event.target.value);
  }

  function addItem(){
    setItems(oldValues => [
      ...oldValues,
      CurrentInput,
    ]);
    setInput('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={GetInput} value={CurrentInput} type="text" />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
