import { useState } from "react";
import "./App.css";
import { InputToDO } from ".src/component/InputToDo.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [toDoList, setToDoList] = useState([]);
  const inputHandler = (inputValue) => {
    setToDoList([...toDoList, inputValue]);
  };

  return (
    <>
      <div className="todo-app">
        <h1>Todo list</h1>
        <InputToDO inputHandler={inputHandler} />
        <ul>
          {toDoList.map((data, index) => (
            <li key={index}>
              {data}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))};
        </ul>
      </div>
    </>
  );
}

export default App;
