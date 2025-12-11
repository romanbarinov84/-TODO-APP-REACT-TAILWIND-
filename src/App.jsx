import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";


function App() {

   const initialTodos = [
    { id: 1, text: "learn React" },
    { id: 2, text: "Do todo-app" },
    { id: 3, text: "do deploy" },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

 
  return (
    <div>
      <div>
        <h1>My Todo-App</h1>
        <div>component with added tasks</div>
        <div>Block of tasks</div>
        <ul>
          {todos.map((todo) => (
            <TodoItem id={todo.id} text={todo.text} onDelete={onDelete}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
