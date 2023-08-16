import React , {useState} from 'react'

function ToDoForm({todos, setToDos, setListInput,listInput,setStatus}) {
    const listInputHandler = (e)=>{
        setListInput(e.target.value);
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        setToDos([...todos , {
            text:listInput, 
            completed:false,
            id:Math.random()*1000
        },])
        setListInput('');
    }
    const selectHandler = (e)=>{
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input type="text" className="todo-input" onChange={listInputHandler} value={listInput}/>
                <button className="todo-button" type="submit"  onClick={submitHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={selectHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default ToDoForm