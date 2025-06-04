import React, { useState } from 'react'
import Todos from './components/todos/todos'
import './App.css'

function App() {
  const[todos, setTodos] = useState(
    [
      {id:0, todo:"Test 1"},
      {id:1, todo:"Godfather"},
    ]
  )

  return (
    <>
      <Todos list={todos} />
    </>
  )
}

export default App
