
import React, {useState} from 'react';
import * as db from '../services/fakeMovieService';
import Like from './common/like';

export default function Table(){
    const movies = db.getMovies();
    const [items, setItems] = useState(movies);
    const [count, setCounter] = useState(movies.length);

    const likeMovie =(id) =>{
        let newList = [...items];
        let index = items.findIndex(item => item._id === id);
        newList[index].isLiked = !newList[index].isLiked;
        setItems(newList); 
    }

    const movieItems = items.map( item => 
    <tr key={item._id}>
        <td>{item.title}</td>
        <td>{item.genre.name}</td>
        <td>{item.numberInStock}</td>
        <td>{item.dailyRentalRate}</td>
        <td>
            <Like isLiked={item.isLiked} id={item._id} likeFunction={likeMovie}/>
        </td>
        <td><button className='btn btn-danger rounded-pill' onClick={() => removeItem(item._id) }>Delete</button></td>
    </tr>
    );

    const removeItem = (id) => {
        setItems( array => array.filter( item => item._id !== id));       
        setCounter(c => c-=1);
    };


    let refactorTableHeader = <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
        </tr>;
      
    const refactorTitle = () => {
        if (count === undefined || count === 0 ) {
            refactorTableHeader = null;
            return 'There are no movies in the databse.';
        }else{
            return `Showing ${count} movies in the database.`;
        }   
    };

    return (
        <>
            <h1>{refactorTitle()}</h1>
            <table className="table mt-4">
                <thead className='border-bottom'>
                    {refactorTableHeader}
                </thead>
                <tbody>
                    {movieItems}
                </tbody>
            </table>
        </>
    );
}