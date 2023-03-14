import React from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){
    const onClickButton = (msg) => {
        alert(msg)
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Open modal')}>+</button>
    );
}

export { CreateTodoButtom};
