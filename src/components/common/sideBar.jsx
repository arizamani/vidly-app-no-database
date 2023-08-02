import React from 'react';
import { NavLink} from "react-router-dom";

export default function SideBar(){
    let linkClasses = "nav-link";
    const toggle = (e) =>{
        if(!e.target.classList.contains("active")){
            linkClasses = "nav-link";
            e.target.classList.add("active");
        } 
    }

    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
            <span className="fs-4">Sidebar</span>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink className={linkClasses} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={linkClasses} to="/admin/post" onClick={(e) => toggle(e)}>Posts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={linkClasses} to="/admin/users" onClick={(e) => toggle(e)}>Usres</NavLink>
                </li>
            </ul>
            <hr/>
        </div>
    );

}