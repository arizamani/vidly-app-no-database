
import React,{useState,useEffect} from 'react';
import Table from './components/table';
import Pagination from './components/common/pagination'
import * as db from './services/fakeMovieService';

function App() {
  const movies = db.getMovies();
  const listPerPage = 2;
  const totalPages = (m) => Math.floor(m.length/listPerPage) + (m.length/listPerPage && m.length % listPerPage > 0 ? 1 : 0);

  const [items, setItems] = useState(movies);
  const [pagesNumber, setPages] = useState(totalPages(movies));
  const [activePage, setActivePage] = useState(0);

  const moviesSeries = (seire) => {
    setActivePage(seire);
  }
  
  const likeMovie =(id) =>{
    let newList = [...items];
    let index = items.findIndex(item => item._id === id);
    newList[index].isLiked = !newList[index].isLiked;
    setItems(newList); 
  }

  const removeItem = (id) => {
    let newList = items.filter( item => item._id !== id);
    setItems(newList);
    setPages(totalPages(newList));
  };

  const newSeries = () => {
    let first = listPerPage*activePage;
    let last = listPerPage*(activePage+1);
    let modifiedSeires = items.slice(first,last);
    if (modifiedSeires.length < 1 && activePage !== 0) setActivePage(activePage - 1);
    return items.slice(first,last);
  }

  return ( 
    <main className="container mt-4">
      <div className='row'>
        <div className='col-2'></div>
        <div className='col'>
          <Table moviesCollection={items} _likeMovie={likeMovie} _removeItem={removeItem} _newSeries={newSeries()}/>
          <Pagination _pagesNumber={pagesNumber} _onClick={moviesSeries} _activePage={activePage}/>
        </div>
      </div>
    </main>
  );
}

export default App;
