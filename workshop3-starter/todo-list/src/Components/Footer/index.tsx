import React from 'react'
import './index.css'
import Todo from '../../types'

interface FooterProps {
    todos: Todo[];
}

export default function Footer(props: FooterProps) {
    const { todos } = props

    const changeCheckbox = () => {

    }

    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox"
                    checked={todos.filter(todo => todo.done).length === todos.length && todos.length !== 0}
                    onChange={changeCheckbox}
                />
            </label>
            <span>
                <span>Total to do list: {todos.length}/Finished {todos.filter(todo => todo.done).length}</span>
                <button className="btn btn-danger">Delete Finished Tasks</button>
            </span>

        </div>
    )
}
