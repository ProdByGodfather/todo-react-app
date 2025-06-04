import React from "react";
import Todo from "./todo";

const Todos=(props)=>{
    return(
        <>
            {props.list.map((todo, index) => (
                <Todo key={todo.id} todo={todo.todo} id={todo.id} todoChanged={(event)=>props.todoChanged(event, todo.id)} />
            ))}
        </>
    )
}

export default Todos