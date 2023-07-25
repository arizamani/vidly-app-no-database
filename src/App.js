
import React,{useState,useEffect} from 'react';
import Table from './components/table';

function App() {
  //const moviesCollection = db.getMovies();
  //const [movies, setmovies] = useState(moviesCollection);
  //const [count, setCounter] = useState(movies.length);
  //console.log("app");
  return ( 
    <main className="container mt-4">
      <Table />
    </main>
  );
}

export default App;
