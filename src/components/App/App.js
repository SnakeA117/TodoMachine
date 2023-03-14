import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../Todosearch/TodoSearch.js";
import { TodoList } from "../Todolist/TodoList.js";
import { TodoItem } from "../TodoItems/TodoItem.js";
import { CreateTodoButtom } from "../CreateTodoButton/CreateTodoButton.js";


// const defaultTodos = [
//   { text: 'Cut onion', completed: true},
//   { text: 'Take React class', completed: true},
//   { text: 'Play Metroid', completed: false},
//   { text: 'Create project', completed: false},
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
    
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
    }, 1000);
  });



  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage('TODOS_V1', []);
 
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return(
      <React.Fragment>
        <TodoCounter
        loading={loading}
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>

          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      <CreateTodoButtom/>
      </React.Fragment>
    );
}

export default App;
