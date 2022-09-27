import React from 'react'
import Category from './Category'

const CategoryList = ({category, setCategory, filteredCategory}) => {
  
    return (
      <div className='todo-container'>
          <ul className='todo-list'>
              {filteredCategory.map((cat) => (
                  <Category category={category} setCategory={setCategory}
                      key={cat.id} text={cat.text}
                      cat={cat}/>
              ))}
          </ul>
        
      </div>
    )
  }

export default CategoryList
