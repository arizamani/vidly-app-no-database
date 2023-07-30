
import React,{useState} from 'react';
import { Icon } from '@iconify/react';

export default function SortButton({title,_onClick,_activeColumn}){
    
    let key;
    switch (title) {
        case 'Title':
            key = 'title';
            break;
        case 'Genre':
            key = 'genre';
            break;
        case 'Stock':
            key = 'numberInStock';
            break;
        case 'Rate':
            key = 'dailyRentalRate';
            break;    
        default:
            break;
    }

    const [sortChange, setSortChange] = useState(false);
    let iconClass = sortChange ? "iconamoon:arrow-down-2-fill" : "iconamoon:arrow-up-2-fill";
    if (_activeColumn !== key) iconClass = null;

    return (
        <button type="button" className="btn ps-0" onClick={() => {
            setSortChange(!sortChange);
            _onClick({title: key ,order: sortChange ? 'asc':'desc' });
        }}>
            {title}
            <Icon icon={iconClass} />
        </button>
    );
}

