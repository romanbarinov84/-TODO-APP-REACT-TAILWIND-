import { useState } from "react"



const AddTodo = ({onAdd}) => {

    const [text , setText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim()) {
            onAdd(text);
            setText("")
        }
    }
  return (
    <form onSubmit={handleSubmit} >
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button className="button-btn" type="submit">ADD</button>
    </form>
  )
}

export default AddTodo