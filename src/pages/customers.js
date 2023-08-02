
import React from 'react';


export default function Customers({name}){
    
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Customers: Welcome {name}</h1>
            </div>
        </main>
    );
}