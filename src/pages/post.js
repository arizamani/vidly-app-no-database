
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import _ from 'lodash';
import mousepad1 from '../assets/images/Mousepad-Blast-RGB-90x40-section2-webp.webp';
import mousepad2 from '../assets/images/Mousepad-Gravitypad-RGB-90x40-section2-webp.webp';
import mousepad3 from '../assets/images/Mousepad-Levitate-RGB-90x40-section2-webp.webp';
import mousepad4 from '../assets/images/Mousepad-Ultimate-RGB-90x40-section2-webp.webp';
import video1 from '../assets/videos/MousePads-section befor gallery.mp4'

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
            <div className='row'>
                <div className='col-3'>
                    <img className="img-fluid" src={mousepad1} alt="New York" loading="lazy"></img>
                </div>
                <div className='col-3'>
                    <img className="img-fluid" src={mousepad2} alt="New York" loading="lazy"></img>
                </div>
                <div className='col-3'>
                    <img className="img-fluid" src={mousepad3} alt="New York" loading="lazy"></img>
                </div>
                <div className='col-3'>
                    <img className="img-fluid" src={mousepad4} alt="New York" loading="lazy"></img>
                </div>
            </div>
            <div className='row'>
                <video className="w-100" autoPlay loop muted playsInline>
                    <source src={video1} type="video/mp4" />
                </video>
            </div>
        </main>
    );
}