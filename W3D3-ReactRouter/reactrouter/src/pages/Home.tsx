import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <ul className="nav nav-pills mb-3 border-bottom">
        <li className="nav-item">
          <NavLink className="nav-link " to="news">News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="messages">Messages</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
