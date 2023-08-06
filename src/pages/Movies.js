
import React,{useEffect, useState} from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import Table from '../components/table';
import Pagination from '../components/common/pagination';
import FilterBox from '../components/common/filterBox';
import * as db from '../services/fakeMovieService';
import * as Genres from '../services/fakeGenreService';
import _ from 'lodash';
import SearchBox from '../components/common/searchBox';


export default function Movies() {
/*   const genresObj = Genres.getGenres();
  const genresArray = genresObj.map(item => item.name);
  genresArray.unshift('All Genres'); */
  let moviesRaw,movies,genresObj,genresArray
  const listPerPage = 4;
  const location = useLocation();

  moviesRaw = db.getMovies();
  movies = moviesRaw.map(m => {
    return {...m, genre: m.genre.name}
  });

  if (location.state){
    let index = _.findIndex(movies, ['title', location.state.title]);
    if(index>=0){
      location.state._id = movies[index]._id;
      movies[index] = location.state;
    }else{
      location.state._id = '1234a';
      movies.push(location.state);
    }

  }

  genresObj = Genres.getGenres();
  genresArray = genresObj.map(item => item.name);
  genresArray.unshift('All Genres');

  const totalPages = (m) => Math.floor(m.length/listPerPage) + (m.length/listPerPage && m.length % listPerPage > 0 ? 1 : 0);
  const tableTitles = ['Title','Genre','Stock','Rate'];
  const tableTitlesEmptyColumns = 2;
  const tableSpecification = {
    listPerPage,
    tableTitles,
    tableTitlesEmptyColumns
  }

  /*
  * These libe added to delete state after refereshing!
  */
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      window.history.replaceState({}, document.title);
    });
  }, []);

  //Movie states
  const [items, setItems] = useState(movies);
  const [pagesNumber, setPagesNumber] = useState(totalPages(movies));
  const [activePage, setActivePage] = useState(0);

  //Genres states
  const [activeGenresIndex, setActiveGenresIndex] = useState(0);
  const [filterItems, setFilterItems] = useState(movies);

  //Filter state 
  const [disableFilte, setDisableFilter] = useState(false);

  //Search states 
  const [searchBox, setSearchBox] = useState('');

  /* 
  *  Filter Component - Event Handler
  */
  const genresList = (index) => {
    setItems(filterItems);
    setActiveGenresIndex(index);
    let activeGenres = genresArray[index];
    if(index !==0){
      let preItems = filterItems.filter(item => item.genre === activeGenres);
      setPagesNumber(totalPages(preItems));
      setItems(preItems);
    }else{
      setPagesNumber(totalPages(filterItems));
    }
    setActivePage(0);
    setSearchBox('');
  }

  /* 
  *  SearchBox Component - Event Handler
  */
  const search = (e) => {
    let startWith = e.target.value;
    const regex = new RegExp(`^(${startWith}).*$`, "gi");
    let newList = filterItems.filter(i => i.title.match(regex));

    setItems(newList);
    setSearchBox(e.target.value);
    setPagesNumber(totalPages(newList));
    setActiveGenresIndex(0);
    if (startWith === ''){
      setDisableFilter(false);
    }else{
      setDisableFilter(true);
    }
  }

  /* 
  *  Table Component - Event Handler
  *  sice it's related to Databse, the Event handler should be in
  *  App component not incapsulated in Table component itself
  */
  const likeMovie =(id) =>{
    let newList = [...items];
    let index = items.findIndex(item => item._id === id);
    newList[index].isLiked = !newList[index].isLiked;
    setItems(newList); 
  }

  const removeItem = (id) => {
    let newList = items.filter( item => item._id !== id);
    if (newList.length % listPerPage === 0 && activePage !== 0) {
      let updateLastPageIndex = newList.length / listPerPage;
      setActivePage(updateLastPageIndex-1);
    }
    setItems(newList);
    setFilterItems(filterItems => filterItems.filter( item => item._id !== id));
    setPagesNumber(totalPages(newList));
  };

  /* 
  *  Pagination Component - Event Handler
  */
  const moviesSeries = (seire) => {
    setActivePage(seire)
  }

  return (
    <main className="container-sm mt-4">
        <div className='row'>
        <div className='col-lg-2'>
            <FilterBox 
            _listItems={genresArray} 
            _activeItems={activeGenresIndex} 
            _onClick={genresList}
            _disable={disableFilte}
            />
        </div>
        <div className='col'>
            <NavLink className="btn btn-primary mb-3" to={'./new'}>New Movie</NavLink>
            <SearchBox _onChange={search} _value={searchBox}/>
            <Table
            _tableFeed={tableSpecification}
            _collection={items} 
            _likeItem={likeMovie} 
            _removeItem={removeItem} 
            _activePage={activePage}
            _activeListItem={genresArray[activeGenresIndex]}
            />
            <Pagination 
            _pagesNumber={pagesNumber} 
            _onClick={moviesSeries} 
            _activePage={activePage}
            />
        </div>
        </div>
    </main>
  );
}

