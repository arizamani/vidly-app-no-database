import React from 'react';
import { NavLink} from "react-router-dom";

export default function Header({menus,additionalClassName}){
    let classes = "navbar navbar-expand-sm bg-light ";
    classes+= additionalClassName ? additionalClassName : '';

    const navs = menus.map(m => {
        let key = Object.keys(m);
        let value = m[key[0]];
        return ( 
            <li key={String(key[0]).toLowerCase()} className="nav-item">
                <NavLink className="nav-link" to={value}>{String(key[0])}</NavLink>
            </li>
        );
    });

    return(
        <header className={classes}>
            <div className="container">
                <ul className="navbar-nav">
                    {navs}
                </ul>
            </div>
        </header>
    );

}