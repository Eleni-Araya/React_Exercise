import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function NewsDetail() {
    const [news, setNews] = useSearchParams()
    return (
        <div>
            <p>News Id:{news.get('id')}</p>
            <p>News title:{news.get('title')}</p>
            <p>News content:{news.get('content')}</p>
        </div>
    )
}
