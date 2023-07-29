
import React,{useState}from 'react';
import { Icon } from '@iconify/react';

export default function Like(props){
    
    const [like , setLike] = useState(props.isTrue);

    const likeFunction = () => like ? setLike(false) : setLike(true);

    let iconClass = like ? <Icon icon="icon-park-solid:like"/> : <Icon icon="icon-park-outline:like"/>

    return <a href='#0' style={{color:'#333333'}} onClick={likeFunction}>{iconClass}</a>;
}