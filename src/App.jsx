import { useEffect, useState } from "react";
import TodoItem from "../src/components/TodoItem";

import "./App.css";

function App() {
   const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);

    setText("");
  };

  const onDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-500">
          React Todo-App on Tailwind
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Введите текст"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1 rounded-2xl border border-gray-300 px-4 py-2
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30
                       outline-none transition"
          />

          <button
            onClick={addTodo}
            className="rounded-2xl bg-indigo-600 px-4 py-2
                       text-white font-semibold
                       hover:bg-indigo-700
                       active:scale-95
                       focus:ring-2 focus:ring-indigo-500/40
                       transition"
          >
            ➕
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
