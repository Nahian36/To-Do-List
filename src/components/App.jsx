import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  // function deleteItem(index) {
  //   setItems([]);
  //   console.log(items);
  //   items.map((item, ind) => {
  //     if (ind !== index) {
  //       setItems((prev) => {
  //         return [...prev, item];
  //       });
  //     }
  //   });
  // }

  //OR

  function deleteItem(index) {
    setItems((prev) => {
      return prev.filter((item, ind) => {
        return ind !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoList
              key={index}
              id={index}
              todoItem={todoItem}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
