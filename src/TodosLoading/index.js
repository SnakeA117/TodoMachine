import React from 'react';
import './TodosLoading.css'

function TodosLoading({ error }){
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>Loading</p>
        </div>
    );
}

export { TodosLoading }