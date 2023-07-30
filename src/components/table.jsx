
import React, {useState} from 'react';
import Like from './common/like';
import SortButton from './common/sortButton';

export default function Table({tableFeed,moviesCollection,_likeMovie,_removeItem,_newSeries,changeSort,activeColumn}){
    const movieItems = _newSeries.map( item => 
        <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
                <Like isLiked={item.isLiked} id={item._id} __likeMovie={_likeMovie}/>
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
        {tableFeed.tableTitles.map(m => <th key={m}><SortButton title={m} _onClick={changeSort} _activeColumn={activeColumn}/></th>)}
        {emptyTitlesColumns(tableFeed.tableTitlesEmptyColumns)}
    </tr>;
      
    const refactorTitle = () => {
        if (moviesCollection.length === undefined || moviesCollection .length=== 0 ) {
            refactorTableHeader = null;
            return 'There are no movies in the databse.';
        }else{
            return `Showing ${moviesCollection.length} movies in the database.`;
        }   
    };

    return (
        <>
            <h1>{refactorTitle()}</h1>
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