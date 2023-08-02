
import React, {useState} from 'react';
import Like from './common/like';
import SortButton from './common/sortButton';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';


export default function Table({_tableFeed,_collection,_likeItem,_removeItem,_activePage,_activeListItem}){

    const [column, setColumn] = useState({title:'title', order:'asc'});

    const sortItem = (col) => {
        setColumn(col);
    }

    const _newSeries = (a) => {
        let sorted=[];
        if (column.order === 'asc'){
          sorted = _.sortBy(a,column.title);
        }else{
          sorted = _.sortBy(a,column.title);
          sorted.reverse();
        }
        let first = _tableFeed.listPerPage*_activePage;
        let last = _tableFeed.listPerPage*(_activePage+1);
        return sorted.slice(first,last);
    }

    const movieItems = _newSeries(_collection).map( item => 
        <tr key={item._id}>
            <td>
                <NavLink className="nav-link" to={`./${item._id}`}>{item.title}</NavLink>
            </td>
            <td>{item.genre}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
                <Like isLiked={item.isLiked} id={item._id} __likeMovie={_likeItem}/>
            </td>
            <td><button className='btn btn-danger rounded-pill' onClick={() => _removeItem(item._id) }>Delete</button></td>
        </tr>
    );

    let emptyTitlesColumns = (a) => {
        let array = [];
        for (let i=0; i< a; i++ ){
            array.push(<th key={i}></th>);
        }
        return array;
    }

    let refactorTableHeader = <tr>
        {_tableFeed.tableTitles.map(m => <th key={m}><SortButton title={m} _onClick={sortItem} _activeColumn={column.title}/></th>)}
        {emptyTitlesColumns(_tableFeed.tableTitlesEmptyColumns)}
    </tr>;
      
    const refactorTitle = () => {
        if (_collection.length === undefined || _collection.length=== 0 ) {
            refactorTableHeader = null;
            if (_activeListItem === 'All Genres') return `There are no movies in any genre.`;
            return `There are no movies in ${_activeListItem.toLowerCase()}.`;
        }else{
            return `Showing ${_collection.length} movies in ${_activeListItem.toLowerCase()}.`;
        }   
    };

    return (
        <>
            <h1 className='cursor-pointer text-indigo-200'>{refactorTitle()}</h1>
            <div className="table-responsive-sm">
            <table className="table mt-4">
                <thead className='border-bottom'>
                    {refactorTableHeader}
                </thead>
                <tbody>
                    {movieItems}
                </tbody>
            </table>
            </div>
        </>
    );
}