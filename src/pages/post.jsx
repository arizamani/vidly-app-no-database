
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import _ from 'lodash';


export default function Post(){
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries([...searchParams]);
    let queryArray = [];
    if(!_.isEmpty(query)){
        _.forEach(query, (value, key) => {
            queryArray.push(key + ' : ' + value)
        });
    }

    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Post</h1>
                {queryArray.map(q => <h2 key={q}>{q}</h2>)}
            </div>
        </main>
    );
}