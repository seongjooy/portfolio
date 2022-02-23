import React, { Children } from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Navbar></Navbar>
        <div className='content'>
            {children}
        </div>
        <footer>
            Copyright by xx
        </footer>

    </div>
  )
}

export default Layout