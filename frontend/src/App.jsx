/*import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Baroser}
/*function App() {
    const [todos, setTodos] =useState([{
      title:"1 go to gym",
      description:"sdjgfjdknfj",
    },{
      title:"2 go to gym",
      description:"sdjgfjdknfj",
    },{
      title:"3 go to gym",
      description:"sdjgfjdknfj",
    }])
    function add(){
      setTodos([...todos,{
        title:"4 go to gym",
        description:"sdjgfjdknfj",
      }]) 
    }
  return (
    <>
    <button onClick={add}> add new todo</button>
       {todos.map(todo=><Todo title={todo.title} description={todo.description} ></Todo>)}
    </>
  );
}

function Todo({title,description})
{
  return <div>
      <h1>
        {title}
      </h1>
      <h5>
        {description}
      </h5>
  </div>
}
export default App;
*/
/*import React from 'react'

const App = () => {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos)
    })
  },[])
  return ( 
    <div>
       {todos.map(todo=><Todo  title={todo.title} description={todo.description}/>)}
    </div>
  )
}


function Todo({title,description})
{
    return
       <>
         <h1>{title}</h1>
         <h5>{description}</h5>
       </>
    
}

export default App
*/
/*import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
function App() {
  const navigate= useNavigate();
  return (
    <div>
       <div>
        <button onClick={()=>{
          navigate("/")
        }}>Landing</button>
        <button
        onClick={()=>{
          navigate("/Dashboard")
        }}>Dashboard</button>
       </div>
       
          <Routes>
            <Route path = "/dashboard" element={<Dashboard/>}></Route>
            <Route path = "/" element={<Landing/>}></Route>
          </Routes>
       
    </div>
    
  )
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'




function App() {
  const navigate = useNavigate();
  return (
    <>
    <div>
       <button onClick={()=>{
         navigate('/')
       }}>Landing</button>
       <button onClick={()=>{
         navigate('/Dashboard')
       }}>Dashboard</button>   
    </div>
    <Routes>
      <Route path = "/dashboard" element={<Dashboard/>}></Route>
      <Route path = "/" element={<Landing/>}></Route>
    </Routes>
    </>
  );
}

export default function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

