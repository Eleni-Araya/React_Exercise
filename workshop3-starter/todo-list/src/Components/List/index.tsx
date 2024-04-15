import React, { useState } from 'react'

import Item from '../Item'
import Todo from '../../types'

import './index.css'

type Props = {
    todos: Todo[],
    onUpdateTodo: (id: string) => void;
    onDeleteBtn: (id: string) => void;
}

export default function List(props: Props) {
    const { todos, onUpdateTodo, onDeleteBtn } = props;
    return (
        <ul className="todo-main">
            {todos.map(todo => <Item key={todo.id}
                {...todo}
                onUpdateTodo={onUpdateTodo}
                onDeleteBtn={onDeleteBtn} />)}
        </ul>
    )
}
