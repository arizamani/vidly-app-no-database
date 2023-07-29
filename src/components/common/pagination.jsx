
import React from 'react';

export default function Pagination({_pagesNumber,_onClick,_activePage}){
    const pages =[];
    if (_pagesNumber>1){
        for (let i = 0; i < _pagesNumber; i++) {
            pages.push(<li key={i} className={_activePage === i ? "page-item active" : "page-item"}><a className="page-link" href="#" onClick={() => _onClick(i)}>{i+1}</a></li>)
        }
    }
    return (
    <ul className="pagination"> 
        {pages}
    </ul>
    );
}