import React from 'react';
import './TodoCounter.css';

function TodoCounter() {
    return (
        <React.Fragment>
        <h1 className='TodoCounter'>TodoList!</h1>
        <h2 className='TodoCounter'>You've completed 2 out of 3 tasks</h2>
        </React.Fragment>
    );
}

export { TodoCounter };