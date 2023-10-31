import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 style={{color:"#4835f1"}}>The New Blog </h1>
            <div className='links'>
                <Link to='/'>
                  Home
                </Link>
                
                <Link to='/create' style={{
                        color:'white',
                        background:'#4835f1',
                        borderRadius:'8px',
                        padding:'13px 23px'
                    }}>
                   Create new blog
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
