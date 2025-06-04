import React from "react";
import './todo.css'

const Todo=(props)=>{
    return(
        <>
            <div className="todos">
                <p>Number {props.id}</p>
                <input type="text" class="todo" value={props.todo} onChange={props.todoChanged} />
            </div>
        </>
    )
}

export default Todo