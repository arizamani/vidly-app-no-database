import React from 'react';

export default function Header(){

    return(
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/movies">Movies</a>
                    </li>
                </ul>
            </div>
        </nav>
    );

}