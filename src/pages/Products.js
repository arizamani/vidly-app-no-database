
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Products(){
    
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Products</h1>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="./1">Product 1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="./2">Product 2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="./3">Product 3</NavLink>
                    </li>
                </ul>
            </div>
        </main>
    );
}