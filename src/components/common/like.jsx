
import React,{useState}from 'react';
import { Icon } from '@iconify/react';

export default function Like({isLiked,likeFunction,id}){
    
    return (
    <a href='#0' style={{color:'#333333'}} onClick={() => likeFunction(id)}>
        {isLiked ? <Icon icon="icon-park-solid:like"/> : <Icon icon="icon-park-outline:like"/>}
    </a>
    );
}