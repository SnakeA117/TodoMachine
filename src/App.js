import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";
// import './App.css';

const todos = [
  { text: 'Cut onion', completed: true},
  { text: 'Take React class', completed: false},
  { text: 'Play Metroid', completed: false},
];

function App(props) {
    return(
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            />
          ))}
        </TodoList>
      <CreateTodoButtom/>
      </React.Fragment>
    );
}

export default App;
