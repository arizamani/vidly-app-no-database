import React from 'react';

export default function Footer({additionalClassName}){
    let classes = "container-fluid bg-light ";
    classes+= additionalClassName ? additionalClassName : '';
    return(
        <footer className={classes}>
            <div className="container">
                <footer className="py-3">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="/movies" className="nav-link px-2 text-muted">Movies</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p className="text-center text-muted">© 2021 Company, Inc</p>
                </footer>
            </div>
        </footer>
    );

}