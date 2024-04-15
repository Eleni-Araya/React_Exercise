import React, { ChangeEvent } from 'react'
import './index.css'
import Todo from '../../types'

interface FooterProps {
    todos: Todo[];
    onCheckAll: (value: boolean) => void,
    onDeleteFinishedTodos: () => void;
}

export default function Footer(props: FooterProps) {
    const { todos, onCheckAll, onDeleteFinishedTodos } = props

    const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        onCheckAll(e.target.checked)
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure?')) {
            onDeleteFinishedTodos();
        }
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
                <button className="btn btn-danger" onClick={handleDelete}>Delete Finished Tasks</button>
            </span>

        </div>
    )
}
