import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav className='nav'>
        
            <ul id='list'>
                <li><NavLink to="/" className='listAnker'>Home</NavLink></li>
                <li><NavLink to="/add" className='listAnker'>AddData</NavLink></li>
                <li><NavLink to="/showdata" className='listAnker'>ShowData</NavLink></li>
            </ul>
        
    </nav>
    </>
  )
}

export default NavBar