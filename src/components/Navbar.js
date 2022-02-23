import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <h1>
            Seong Joo Yoon
        </h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    </nav>
  )
}

export default Navbar