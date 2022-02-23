import React, { Children } from 'react'
import Navbar from './Navbar'
import * as styles from '../styles/global.css'
import './Layout.css'
import { Link } from 'gatsby'


const Layout = ({children}) => {
  return (
    <div className='layout'>
        <div className='content'>
            {children}
        </div>
        <nav className='nav'>
            <Link className='navhome' to='/'>Home</Link>
            <Link className='navabout' to='/about'>About</Link>
            <Link className='navexp' to='/experience'>Experience</Link>
            <Link className='navproj' to='/projects'>Projects</Link>
        </nav>
    </div>
  )
}

export default Layout