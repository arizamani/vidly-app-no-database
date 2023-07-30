
import React from 'react';

export default function FilterBox({listItems,activeGenres,_onClick}){
    //console.log(activeGenres)
    let items = listItems.map((item,index) => <li key={index} style={{cursor:'pointer'}}className={index === activeGenres ? "list-group-item active" : "list-group-item"} onClick={() => _onClick(index)}>{item}</li>);
    //console.log(listItems)
    return (
        <ul className="list-group mb-4">
            {items}
        </ul>
    );
}