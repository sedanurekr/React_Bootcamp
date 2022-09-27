import React, { useState, useEffect, useRef } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import Todo from './components/Todo';
//import Category from './components/Category';
//import CategoryList from './components/CategoryList';
import './App.css';

function App() {

  

  const[inputText, setInputText] = useState("");
  //const[catText, setCatText] = useState("");
  //const [category, setCategory] = useState([]);
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]);
  const[editable, setEditable] = useState(null);
  const[editText, setEditText] = useState("");
  //const[filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [todos, status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} 
             setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos}
                filteredTodos={filteredTodos}/>
      {/*<CategoryList category={category} setCategory={setCategory}              
                filteredCategory={filteredCategory}/>    */}
      

    </div>
  );
}

export default App;
