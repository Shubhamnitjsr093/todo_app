import React, { useState } from 'react'
import CreateTodo from './CreateTodo'
function buttonComponent() {
    const [title,setTitle]= useState(0);
    function add()
    {
        setTitle(Math.random());
    }
  return (
    <>
    <button onClick={add}>add new things</button>
    <CreateTodo title={title}></CreateTodo>
    </>
  )
}

export default buttonComponent;