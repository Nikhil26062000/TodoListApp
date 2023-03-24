import React from 'react';
import './index.css';
 
const Todo = (props) => {
    return(
        <>
        <div className="todo-style">
            <i className="fa fa-times"  aria-hidden="true"
             onClick={()=>{
                props.onSelect(props.id)
             }}
            ></i>
            <li>{props.value}</li>
        </div>
        </>
    );
};

export default Todo;