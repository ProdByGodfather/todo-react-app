import React, { useState } from 'react'
import Todos from './components/todos/todos'
import './App.css'

function App() {
  const[todosState, setTodos] = useState(
    [
      {id:0, todo:"Test 1"},
      {id:1, todo:"Godfather"},
    ]
  )

  const todoChangeHnadler = (event, id)=>{
    const student_index = todosState.findIndex(student=>{
      return student.id === id;
    })
    console.log(student_index);
    const todo={...todosState[student_index]};
    todo.todo = event.target.value;
    const todos = [...todosState];
    todos[student_index] = todo;
    setTodos(todos);
    
  }

  return (
    <>
      <Todos list={todosState} todoChanged={todoChangeHnadler} />
    </>
  )
}

export default App
