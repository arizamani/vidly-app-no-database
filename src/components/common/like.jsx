
import React from 'react';
import { Icon } from '@iconify/react';

export default function Like({isLiked,__likeMovie,id}){
    
    return (
    <a href='#0' style={{color:'#333333'}} onClick={() => __likeMovie(id)}>
        {isLiked ? <Icon icon="icon-park-solid:like"/> : <Icon icon="icon-park-outline:like"/>}
    </a>
    );
}