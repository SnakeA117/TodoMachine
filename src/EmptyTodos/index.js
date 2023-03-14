import React from 'react';
import './EmptyTodos.css'

function EmptyTodos(){

    return (
        <div className='emptydiv'>
             <p className='emptyTasks'>There are no pending tasks</p>;
        </div>
    );
     }

export { EmptyTodos }


