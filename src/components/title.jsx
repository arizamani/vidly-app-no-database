
import React from 'react';

export default function Title(props){
    const refactorTitle = props.count === undefined || props.count === 0 ? 'There are no movies in the databse.' : `Showing ${props.count} movies in the database.`;
    return <h1>{refactorTitle}</h1>;
}