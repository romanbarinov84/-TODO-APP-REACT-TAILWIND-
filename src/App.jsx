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
  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;

    if (savedTheme) {
      return savedTheme;
    } else if (prefersDark) {
      return "dark";
    } else {
      const hours = new Date().getHours();
      return hours < 6 || hours >= 21 ? "dark" : "light";
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div data-theme={theme}
    className="flex flex-col min-h-screen justify-center items-center bg-[#f3f3f3]  dark:bg-[#5e7cf5] ">
      <div className="flex justify-between gap-4 mb-5">
        <h3 className= "text-red-400 dark:text-white">change theme</h3>
        <div className=" flex items-center border-2 border-orange-400 w-24 p-2 cursor-pointer rounded-2xl">
          <button onClick={toggleTheme} className="relative ">
            <div className="w-14 h-7 border-2 border-orange-300 rounded-full shadow-inner transition-colors duration-300 bg-gray-300 dark:bg-[#00008b]"></div>
            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md *:transform transition-transform duration-300 translate-x-0 dark:translate-x-7"></div>
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <AddTodo onAdd={onAdd} />
        <div className="border-2 border-[#ff6633] rounded-2xl">
          {todos.map((todo) => (
            <TodoItem id={todo.id} text={todo.text} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
