const TodoItem = ({ id, text , onDelete }) => {
  return (
    <>
      <div key={id} className="flex  flex-row justify-between w-200 m-5 p-4 border border-black">
        <span>{text}</span>
        <div>
          <button>Done</button>
          <button onClick={() => onDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
