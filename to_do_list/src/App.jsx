import React from 'react';
import { useEffect } from 'react';
//import { useNavigate, useLocation, Routes , Route } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import { TodoList } from './component/TodoList';
import styles from './styles.module.css';
//import stylesMenu from './stylesMenu.module.css';

const KEY = "todoApp.todos"

export function App() {

    const [todos, setTodos] = React.useState([{
        id: 1,
        task: 'Tarea de testing', 
        completed: false
    }]);

    const addTodoRef = React.useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        storedTodos && setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos]);

    const handleAddTodo = (e) => {
        const newTask = addTodoRef.current.value;

        newTask && setTodos((prevTodos) => [...prevTodos, {id: todos.length + 1, task: newTask, completed: false} ]);

        addTodoRef.current.value = null;
    };

    const handleDelTodo = (todoId) => {
        todoId && setTodos(todos.filter(item => item.id !== todoId));

        console.log(`La tarea ID ${todoId} ha sido eliminada`);
    };

    const toggleCompleteTodo = (todoID) => {
        const newTodos = [...todos];
        const completeTodo = newTodos.find((item) => item.id === todoID);
        completeTodo.completed = !completeTodo.completed;
        setTodos(newTodos);
    }

    const handleClearComplete = (e) => {
        setTodos(todos.filter(item => !item.completed));

    };

    return (
        <>
            <nav className={styles.appNav}>
                <h2>To Do App ✔</h2>
                <input type="checkbox" id={styles.active}/>
                <label for={styles.active} className={styles.appMenuBtn}></label>
                <div className={styles.appWrapper}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>

                {/* <details>
                    <summary></summary>
                    <div className={stylesMenu.menu}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                        </ul>
                    </div>
                </details> */}

            </nav>
            <div className={styles.appDiv}>
                

                <TodoList 
                    todos={todos}
                    handleDelTodo={handleDelTodo}
                    toggleCompleteTodo={toggleCompleteTodo}
                    />

                <div className={styles.addInput}>
                    <input ref={addTodoRef} type='text' placeholder='Ingrese nueva tarea'/>
                    <button onClick={handleAddTodo}>➕</button>
                
                </div>
                
                <div className={styles.infoDiv}>
                    <h3>Te quedan {todos.filter((item) => !item.completed).length} tareas por completar...</h3>    
                    <button onClick={handleClearComplete}>Eliminar tareas completadas ✔</button>
                </div>
            </div> 

            <footer className={styles.appFooter}>
                <p>Desarrollado con mucho coffe por Emanuel 🖤</p>
            </footer>
        </>
    )
};