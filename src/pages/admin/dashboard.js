
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Dashboard(){
    
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Dashboard</h1>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
                        <span className="fs-4">Sidebar</span>
                        <hr/>
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/post">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/users">Usres</NavLink>
                            </li>
                        </ul>
                        <hr/>
                    </div>
                </div>
                <div className='col'></div>
            </div>            
        </main>
    );
}