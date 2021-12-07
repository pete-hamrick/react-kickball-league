import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/kick-off.png'
import './Header.css'

export default function Header() {
  return (
    <header className="App-header">
      <div className="image-container">
        <img src={logo} alt="App Logo" />
      </div>
      <div>
        <ul className="link-container">
          <li className="App-link Nav-link">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="App-link Nav-link">
            <NavLink exact to="/teams">
              Teams
            </NavLink>
          </li>
          <li className="App-link Nav-link">
            <NavLink exact to="/players">
              Players
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
