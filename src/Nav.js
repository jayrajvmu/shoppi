import React from 'react';
import { Link, Router } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
    return (
        <div className='custom-nav'>
            <div className='logo'>
                <h1>H Hacking</h1>
            </div>
            <div className='menu-items'>  
                 <ul>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/des'>Description</Link></li>
                    <li><Link to='/form'>Form</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                 </ul>
                
               </div>

        </div>
    );
};
export default Navbar;