import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <nav>
            <Link to="/home1">Home1</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/mylogs">Mylogs</Link>
            <Link to="/login1">Login</Link>
        </nav>
    </div>
  )
}

export default Header