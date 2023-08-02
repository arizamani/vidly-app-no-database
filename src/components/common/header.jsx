import React from 'react';
import { NavLink} from "react-router-dom";

export default function Header({additionalClassName}){
    let classes = "navbar navbar-expand-sm bg-light ";
    classes+= additionalClassName ? additionalClassName : '';

    return(
        <header className={classes}>
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/post">Post</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/post">Admin</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );

}