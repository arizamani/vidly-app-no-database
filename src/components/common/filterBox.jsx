
import React from 'react';

export default function FilterBox({_listItems,_activeItems,_onClick,_disable}){
    let classes = "list-group-item";
    classes += _disable ? " disabled" : "";
    let activeClass = _disable ? classes : classes + " active";
    let items = _listItems.map((item,index) => <li key={index} style={{cursor:'pointer'}} className={index === _activeItems ? `${activeClass}` : `${classes}`} onClick={() => _onClick(index)}>{item}</li>);

    return (
        <ul className="list-group mb-4">
            {items}
        </ul>
    );
}