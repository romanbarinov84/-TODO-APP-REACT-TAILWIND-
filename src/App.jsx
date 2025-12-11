import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";


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

  const onAdd = (text) => {
    const newTodo = {
      id:Date.now(),
      text,
    }
    setTodos([...todos , newTodo])
  }

 
  return (
    <div>
      <div>
        <h1>My Todo-App</h1>
        <AddTodo onAdd={onAdd}/>
        <div>Block of tasks</div>
        <div>
          {todos.map((todo) => (
            <TodoItem id={todo.id} text={todo.text} onDelete={onDelete}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
