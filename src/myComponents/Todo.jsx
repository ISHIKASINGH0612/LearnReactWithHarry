import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
  return (
    <div className='container'>
     <h3 className='text-center my-3'>My Todos</h3>
     {props.todo.length===0? "No todos to display":
     props.todo.map((todo)=>{
      return (   <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/>)
     })}
    </div>
  )
}

export default Todo
