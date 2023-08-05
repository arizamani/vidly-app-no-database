import React,{useEffect} from "react";
import { useParams,useNavigate,useSearchParams } from "react-router-dom";
import MovieForm from "../components/movieForm";
import _ from 'lodash';

export default function DetailMovies(){
    let movieFormPopulation;
    const prams = useParams();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries([...searchParams]);
    let queryArray = {};
    if(!_.isEmpty(query)){
        _.forEach(query, (value, key) => {
            queryArray[key] = value;
        });
        movieFormPopulation = <MovieForm 
            defaultTitle={queryArray.title} 
            defaultGenre={queryArray.genre} 
            defaultStock={queryArray.stock} 
            defaultRate={queryArray.rate}
        />
    }
    const navigate = useNavigate();
    
/*     useEffect(() => {
        if (prams.id === 'new') navigate('./not-found');
    });  */
    if (prams.id === 'new') {
        movieFormPopulation = <MovieForm 
            defaultTitle={''} 
            defaultGenre={'Action'} 
            defaultStock={''} 
            defaultRate={''}
        />
    }

    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Movie - {prams.id}</h1>
                {movieFormPopulation}
            </div>
        </main>
    );
}