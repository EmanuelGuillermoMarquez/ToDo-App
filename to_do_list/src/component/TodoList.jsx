import React from 'react';
import { TodoItem } from './TodoItem';
import styles from '../styles.module.css';

export function TodoList( {todos, handleDelTodo, toggleCompleteTodo} ) { // {todos} = props.todos => destructuring

    

    return (
   
        <ul className={styles.todoList}>
            {todos.map((item) => (
                <TodoItem 
                    key={item.id}
                    todoItem={item}
                    handleDelTodo={handleDelTodo}
                    toggleCompleteTodo={toggleCompleteTodo}
                    />
            ))}
        </ul>

     )
}

