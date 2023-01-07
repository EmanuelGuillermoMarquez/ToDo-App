import React from 'react';
import styles from '../styles.module.css';

export function TodoItem( {todoItem, handleDelTodo, toggleCompleteTodo} ) {

    console.log(todoItem)

    return (

        <div className={styles.todoItem}>
            <label>
                <li className={!todoItem.completed 
                    ? styles.todoListItem 
                    : styles.todoListItemCompleted
                    }>
                    {todoItem.task}
                 </li>
                <input type="checkbox" name="completeCheck" checked={todoItem.completed} onChange={() => toggleCompleteTodo(todoItem.id)}/>
            </label>
            <button onClick={() => handleDelTodo(todoItem.id)}>✖</button>    
        </div>
        
    )
}
