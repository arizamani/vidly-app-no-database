import React from "react";
import { useParams } from "react-router-dom";

export default function DetailMovies(){
    const prams = useParams();
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Movie - {prams.id}</h1>
            </div>
        </main>
    );
}