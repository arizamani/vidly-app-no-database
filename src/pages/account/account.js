
import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';


export default function Account(){
    
    return (
        <main className="container-sm mt-4">
            <div className='row mb-3'>
                <h1>Login/Register</h1>
            </div>
            <div className='row'>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><NavLink className="nav-link" to="./login" >Login</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="./register" >Register</NavLink></li>
                </ul>
            </div>
            <div className='row'>
                <Outlet />
            </div>
        </main>
    );
}