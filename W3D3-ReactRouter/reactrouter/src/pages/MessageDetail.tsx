import React from 'react'
import { useParams } from 'react-router-dom'

export default function MessageDetail() {
    const { id, title, content } = useParams()
    return (
        <div>
            <p>Message Id:{id}</p>
            <p>Message title:{title}</p>
            <p>Message content:{content}</p>

        </div>
    )
}
