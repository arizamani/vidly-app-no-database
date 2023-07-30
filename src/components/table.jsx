
import React, {useState} from 'react';
import Like from './common/like';

export default function Table({moviesCollection,_likeMovie,_removeItem,_newSeries}){

    const movieItems = _newSeries.map( item => 
        <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
                <Like isLiked={item.isLiked} id={item._id} __likeMovie={_likeMovie}/>
            </td>
            <td><button className='btn btn-danger rounded-pill' onClick={() => _removeItem(item._id) }>Delete</button></td>
        </tr>
    );

    let refactorTableHeader = <tr>
            <th><button type="button" class="btn">Title</button></th>
            <th><button type="button" class="btn">Genre</button></th>
            <th><button type="button" class="btn">Stock</button></th>
            <th><button type="button" class="btn">Rate</button></th>
            <th></th>
            <th></th>
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
            <div class="table-responsive-sm">
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