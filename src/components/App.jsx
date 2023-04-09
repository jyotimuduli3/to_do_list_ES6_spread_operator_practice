import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [newItems, setNewItems] = useState([]);
  function handleChange(event) {
    // console.log(event.target.value);
    setItem(event.target.value);
  }
  function handleAdd() {
    setNewItems((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
