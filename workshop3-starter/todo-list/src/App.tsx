import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';
import Todo from './types'

import "./App.css";

export default function App() {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function getTodos() {
            const response = await fetch('http://localhost:9000/todos')
            const data = await response.json();
            setTodos(data)
        }
        getTodos()
    }, [])

    const addNewTodo = (newTodo: Todo) => {
        setTodos([...todos, newTodo]);
    }

    const updateTodo = (id: string) => {
        const newTodos = todos.map(todo => todo.id === id ? ({ ...todo, done: !todo.done }) : todo)
        setTodos(newTodos)
    }

    const deleteBtn = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)

    }

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header onAddNewTodo={addNewTodo} />
                <List todos={todos} onUpdateTodo={updateTodo} onDeleteBtn={deleteBtn} />
                <Footer todos={todos} />
            </div>
        </div>
    )
}
