const TodoItem = ({ todo , onDelete }) => {
  return (
    <div
      key={todo.id}
      className="flex justify-between rounded-2xl border-2 border-gray-300 px-4 py-2 
                       hover:border-indigo-500 hover:bg-pink-700 hover:text-white focus:ring-2 focus:ring-indigo-500/30
                       outline-none transition"
    >
      <span>{todo.text}</span>
      <div className="flex gap-2">
        <button className="rounded-2xl bg-green-300 px-2 py-1
                       text-white font-semibold
                       hover:bg-green-700
                       active:scale-95
                       focus:ring-2 focus:ring-indigo-500/40
                       transition">Сделано</button>
        <button className="rounded-2xl bg-red-300 px-2 py-1
                       text-white font-semibold
                       hover:bg-red-700
                       active:scale-95
                       focus:ring-2 focus:ring-indigo-500/40
                       transition" onClick={() => onDelete(todo.id)}>Удалить</button>
      </div>
    </div>
  );
};

export default TodoItem;
