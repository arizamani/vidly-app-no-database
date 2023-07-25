
import React, {useState} from 'react';
import * as db from '../services/fakeMovieService';

export default function Table(){
    const movies = db.getMovies();
    const [items, setItems] = useState(movies);
    const [count, setCounter] = useState(movies.length);
    const movieItems = items.map( item => 
    <tr key={item._id}>
        <td>{item.title}</td>
        <td>{item.genre.name}</td>
        <td>{item.numberInStock}</td>
        <td>{item.dailyRentalRate}</td>
        <td><button className='btn btn-danger rounded-pill' onClick={() => removeItem(item._id) }>Delete</button></td>
    </tr>
    );

    const removeItem = (id) => {
        setItems( array => array.filter( item => item._id !== id));
        setCounter(c => c-=1);
    };
    const refactorTitle = count === undefined || count === 0 ? 'There are no movies in the databse.' : `Showing ${count} movies in the database.`;

    return (
        <>
            <h1>{refactorTitle}</h1>
            <table className="table mt-4">
                <thead className='border-bottom'>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {movieItems}
                </tbody>
            </table>
        </>
    );
}