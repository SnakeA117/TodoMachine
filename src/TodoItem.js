import React from "react";
import './TodoItem.css';

function TodoItem(props){
    const onComplete = () => {
        alert(`You completed the task ${props.text}`);
    };
    const onDelete = () => {
        alert(`You deleted the task ${props.text}`);
    };
    return(
        <li className="TodoItem">
       <span onClick={onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
       ✅
      </span>
       <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
        </p>
        <span className="Icon Icon-delete"
        onClick={onDelete}>
        ❌
        </span>
        </li>
    );
}

export { TodoItem };