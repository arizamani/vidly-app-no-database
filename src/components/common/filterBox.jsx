
import React from 'react';

export default function FilterBox({_listItems,_activeItems,_onClick}){

    let items = _listItems.map((item,index) => <li key={index} style={{cursor:'pointer'}}className={index === _activeItems ? "list-group-item active" : "list-group-item"} onClick={() => _onClick(index)}>{item}</li>);

    return (
        <ul className="list-group mb-4">
            {items}
        </ul>
    );
}