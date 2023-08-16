import React from 'react'
import ToDo from './ToDo'

function ToDoList({todos, setToDos,filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo)=>{
                  return (<ToDo text={todo.text} key={todo.id} todos={todos} setToDos={setToDos} todo={todo} />)
                })}
            </ul>
        </div>
    )
}

export default ToDoList