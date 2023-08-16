import ToDoList from './projects/ToDoList';
import ToDoForm from './projects/ToDoForm';
import { useState, useEffect } from 'react';
import Calculator from './projects/Calculator';
import Contact from './projects/Contact';
import Recipe from './projects/Recipe';


function App() {
  // 8. To do list
  // const [listInput, setListInput] = useState('');
  // const [todos, setToDos] = useState([]);
  // const [status, setStatus] = useState('all');
  // const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect(()=>{
  //   getLocalStorage();
  // },[])

  // useEffect(()=>{
  //   filterHandler();
  //   saveLocalStorage();
  // },[todos,status])

  // const filterHandler = () => {
  //   switch (status) {
  //     case 'completed':
  //       setFilteredTodos(todos.filter(todo => todo.completed === true));
  //       break;
  //     case 'uncompleted':
  //       setFilteredTodos(todos.filter(todo => todo.completed === false));
  //       break;
  //     default:
  //       setFilteredTodos(todos);
  //       break;
  //   }
  // }

  // const saveLocalStorage = () =>{
  //   window.localStorage.setItem('todos',JSON.stringify(todos));
  // }
  // const getLocalStorage = ()=>{
  //   let localTodo = (window.localStorage.getItem('todos'));
  //   if(localTodo!==null){
  //     setToDos(JSON.parse(localTodo));
  //   };

  // }
  // 10. Contact
  // const [contacts, setContacts]=useState([])
  // useEffect(()=>{
  //     // fetch('https://randomuser.me/api/?results=5').
  //     fetch('https://jsonplaceholder.typicode.com/users').
  //     then(response=>{
  //         return response.json()
  //     })
  //     .then(data=>{
  //       console.log(data)
  //       setContacts(data);
  //         // setContacts(data.results)
  //     })
  // },[])
  // 11. Recipe
  const APP_ID = '87db4601'
  const APP_KEY = '61eb474de1187176ab9b87569773376a'
  const [recipe, setRecipe] = useState([])
  const [query, setQuery] = useState('chicken')
  const [search, setSearch] = useState('')
  const API_URL = `https://api.edamam.com/search?q=${query}s&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    searchRecipes()
  }, [query])

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  const searchRecipes = async () => {
    const response = await fetch(API_URL)

    const data = await response.json()
    console.log(data.hits)
    setRecipe(data.hits)

  }

  return (
    <div className="App">

      {/* 9 <Calculator /> */}
      {/* 8 To do list */}
      {/* <header>
        <h2>My To Do List</h2>
      </header>
      <ToDoForm todos={todos} setToDos={setToDos} setListInput={setListInput} listInput={listInput} setStatus={setStatus} />
      <ToDoList todos={todos} setToDos={setToDos} filteredTodos={filteredTodos} /> */}

      {/* 10 Contact list */}
      {/* {contacts.map(contact=>{
         <Contact 
         key={contact.id}
        //  imgURL = {contact.picture.large}
         name={contact.name}
         email={contact.email}
        //  age = {contact.dob.age}
         />    
      })} */}
      {/* 11 Recipe */}
      <form onSubmit={handleSubmit}>
        <input type='text' value={search} onChange={handleInput} className='search-bar' placeholder='Enter recipe here' />
        <input type='submit' value={'Search'} className='submit-btn' />
      </form>
      <div className='container'>
        {recipe.map(item => {
          return (
            <Recipe key={item.recipe.label}
              name={item.recipe.label}
              ingredients={item.recipe.ingredients}
              imgURL={item.recipe.image} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
