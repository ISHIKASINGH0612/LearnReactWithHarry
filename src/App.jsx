import './App.css'
import Header from './myComponents/Header'
import Todo from './myComponents/Todo'
import Footer from './myComponents/Footer'
import AddTodo from './myComponents/AddTodo'  
import About from './myComponents/About'
import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

//for initial data present in local storage

let initodo;
if(localStorage.getItem("todo")===null){
  initodo=[];
}
else{
  initodo=JSON.parse(localStorage.getItem("todo"));
}

const [todo, setTodo] = useState([initodo]);

//Hook for new todo item

useEffect(() => {
  localStorage.setItem("todo",JSON.stringify(todo));
}, [todo])

function addTodo({title, desc}) {
  console.log("Adding todo, todo is ", {title, desc});

  let id;
  if(todo.length === 0) {
    id = 1;
  } else {
    id = todo[todo.length - 1].id + 1;
  }

  const item = {id, title, desc};

  setTodo([...todo, item]);
}

function onDelete(item) {
  console.log("Deleting todo, todo is ", item);

  setTodo(todo.filter((e)=>{
    return e!==item 
  }))

 
}



  return (
    <>
    <Router>
    <Header title="ToBeDone" searchBar={true} />

    <Routes>
    <Route exact path="/" element={
      <>
      <AddTodo addTodo={addTodo}/>
      <Todo todo={todo} onDelete={onDelete} />
      </>
    }/>     
    <Route exact path="/about" element={<About />} />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App