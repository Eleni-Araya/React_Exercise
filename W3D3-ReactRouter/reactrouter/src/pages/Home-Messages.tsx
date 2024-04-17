import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Messages() {
    const [messages, setMessages] = useState([
        { id: 1, title: 'Breaking news', content: 'Chicken in argiro' },
        { id: 2, title: 'Shocking news', content: 'Chicken for lunch' },
        { id: 3, title: 'Surprising news', content: 'You can eat' }
    ])
    return (
        <ul>
            {messages.map(({ id, title, content }) => <li>
                <Link to={`detail/${id}/${title}/${content}`}>{title}</Link>
            </li>)}
            <div>
                <Outlet />
            </div>
        </ul>
    )
}
