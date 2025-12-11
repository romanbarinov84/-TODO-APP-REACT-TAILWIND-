const TodoItem = ({ id, text , onDelete }) => {
  return (
    <>
      <div key={id} className="flex  flex-row justify-between items-center text-white text-[24px] w-150 m-5 p-4 border-3 border-orange-400 shadow-lg bg-blue-800 rounded-2xl ">
        <span>{text}</span> 
        <div>
          <button className="p-1 m-2 border-2 border-gray-300 bg-green-300 rounded-2xl px-4 shadow-lg">Done</button>
          <button className="p-1 m-2 border-2 border-gray-300 bg-red-300 rounded-2xl px-4 shadow-lg" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
