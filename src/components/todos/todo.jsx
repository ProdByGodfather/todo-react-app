import React from "react";
import './todo.css'

const Todo=(props)=>{
    return(
        <>
            <div className="todos">
                <p>Number {props.id}</p>
                <input type="text" className="todo" value={props.todo} onChange={props.todoChanged} />
                <br /><br />
                <button className="delete" onClick={props.todoDelete}>Delete</button>
            </div>
        </>
    )
}

export default Todo