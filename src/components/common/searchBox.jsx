import React from 'react';

export default function SearchBox({_onChange,_value}){

    return (
        <div className="mb-3">
            <div style={{position:'relative'}}>
                <input className="form-control" type='text' onChange={_onChange} value={_value}/>
            </div>
        </div>
    );


}