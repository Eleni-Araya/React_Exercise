import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function News() {
    const [news, setNews] = useState([
        { id: 1, title: "breaking news", content: "no class" },
        { id: 2, title: "suprise news", content: "you got a job" },
        { id: 3, title: "Good news", content: "learn react" },

    ])
    return (
        <div>
            <ul>
                {news.map(({ id, title, content }) => <li key={id}>
                    <Link to={`detail?id=${id}&title=${title}&content=${content}`}>{title}</Link>
                </li>)}
                <Outlet />
            </ul>
        </div>
    )
}
