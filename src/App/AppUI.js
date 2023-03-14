import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../Todosearch';
import { TodoList } from '../Todolist';
import { TodoItem } from '../TodoItems';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import './App.css'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p className='instructions'>Error 404...</p>}
        {loading && <p className='instructions'>Loading...</p>}
        {(!loading && !searchedTodos.length) && <p className='instructions'>¡Create your first task!</p>}
        
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

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
