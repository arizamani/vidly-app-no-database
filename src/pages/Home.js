
import React from 'react';


export default function Home({name}){
    
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Home: Welcome {name}</h1>
            </div>
        </main>
    );
}