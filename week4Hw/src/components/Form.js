import React from 'react'
import TodoList from './TodoList';
//import CategoryList  from './CategoryList';


const Form = ({setInputText,inputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = (event) =>{
    //console.log("test")
    console.log(event.target.value)
    setInputText(event.target.value)
  };

  const submitTodoHandler = (event) =>{
    event.preventDefault()
    setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}])
    setInputText("")
  }

  // const categoryTextHandler = (event) =>{
  //   console.log(event.target.value)
  //   setCatText(event.target.value)
  // };

  // const submitCategoryHandler = (event) =>{
  //   event.preventDefault()
  //   setCategory([...category, {text:catText, completed:false, id:Math.random()*1000}])
  //   setCatText("")
  // }
  
  
  const statusHandler = (event) => {
    //console.log(event.target.value)
    setStatus(event.target.value)
  }

 
  return (
 
      <form>
        
       {/* <input value={catText} onChange={categoryTextHandler} type="text" className="todo-input" placeholder='Enter category'/>
        <button onClick={submitCategoryHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
  </div>*/}



        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder='Enter to do'/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
    </form>

  )
}

export default Form;
