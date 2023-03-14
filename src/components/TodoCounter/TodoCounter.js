import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <React.Fragment>
        <h1 className='TodoCounter'>TodoList!</h1>
        <h2 className='TodoCounter'>You've completed {completed} out of {total} tasks</h2>
        </React.Fragment>
    );
}

export { TodoCounter };