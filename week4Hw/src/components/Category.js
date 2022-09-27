import React from 'react'


const Category = ({text, cat, category, setCategory}) => {

    const deleteHandlerCat = () => {
        setCategory(category.filter(item => item.id !== cat.id))
    };
    
    const CompleteHandlerCat = () => {
        setCategory(category.map((item) =>{
            if(item.id === cat.id){
                return {
                    ...item, completed: !item.completed
                }  
            } 
            return item; 
        }))
    }
    
    return (
        <div className='todo'>
            <li className={`todo-item ${cat.completed ? "completed": ""}`}>{text}</li>
            <button onClick= {CompleteHandlerCat} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandlerCat} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        
        </div>
    )
}

export default Category;
