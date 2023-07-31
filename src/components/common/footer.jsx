import React from 'react';

export default function Footer(){

    return(
        <div className="container-fluid bg-light">
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/movies">Movies</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Imprint</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Contact</a>
                            </li>
                        </ul>                   
                    </div>
                </div>
            </div>
        </div>
    );

}