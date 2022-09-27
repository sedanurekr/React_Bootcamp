import React from 'react'

const Todo = ({text, todo, todos, setTodos, setEditable}) => {

  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  };

  const CompleteHandler = () => {
    setTodos(todos.map((item) =>{
        if(item.id === todo.id){
            return {
                ...item, completed: !item.completed
            }  
        } 
        return item; 
    }))
  };

  const editHandler = () => {
    setEditable(todo.id)
  };

  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
        <button onClick= {CompleteHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={editHandler} className='edit-btn'>
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            <i className='fas fa-trash'></i>
        </button>

        
      
    </div>
  )
}

export default Todo;
