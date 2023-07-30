
import React,{useState,useMemo} from 'react';
import Table from './components/table';
import Pagination from './components/common/pagination';
import FilterBox from './components/common/filterBox';
import * as db from './services/fakeMovieService';
import * as Genres from './services/fakeGenreService';

function App() {
  const genresObj = Genres.getGenres();
  const genresArray = genresObj.map(item => item.name);
  genresArray.unshift('All Genres');
  //console.log(genresArray);

  const movies = db.getMovies();
  const listPerPage = 4;
  const totalPages = (m) => Math.floor(m.length/listPerPage) + (m.length/listPerPage && m.length % listPerPage > 0 ? 1 : 0);

  //Movie states
  const [items, setItems] = useState(movies);
  const [pagesNumber, setPagesNumber] = useState(totalPages(movies));
  const [activePage, setActivePage] = useState(0);
  //Genres states
  const [activeGenresIndex, setActiveGenresIndex] = useState(0);
  const [filterItems, setFilterItems] = useState(movies);

  //Event Handler
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
    setFilterItems(filterItems => filterItems.filter( item => item._id !== id));
    setPagesNumber(totalPages(newList));
  };

  const genresList = (index) => {
    setItems(filterItems);
    setActiveGenresIndex(index);
    let activeGenres = genresArray[index];
    if(index !==0){
      let preItems = filterItems.filter(item => item.genre.name === activeGenres);
      setPagesNumber(totalPages(preItems));
      setItems(preItems);
    }else{
      setPagesNumber(totalPages(filterItems));
    }

  }

  //Function
  const newSeries = (a) => {
    let first = listPerPage*activePage;
    let last = listPerPage*(activePage+1);
    let modifiedSeires = a.slice(first,last);
    if (modifiedSeires.length < 1 && activePage !== 0) setActivePage(activePage - 1);
    return a.slice(first,last);
  }

  return ( 
    <main className="container-sm mt-4">
      <div className='row'>
        <div className='col-lg-2'>
          <FilterBox listItems={genresArray} activeGenres={activeGenresIndex} _onClick={genresList}/>
        </div>
        <div className='col'>
          <Table moviesCollection={items} _likeMovie={likeMovie} _removeItem={removeItem} _newSeries={newSeries(items)}/>
          <Pagination _pagesNumber={pagesNumber} _onClick={moviesSeries} _activePage={activePage}/>
        </div>
      </div>
    </main>
  );
}

export default App;
