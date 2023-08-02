
import React from 'react';
import { Outlet} from "react-router-dom";
import SideBar from '../../components/common/sideBar';

export default function Admin(){
    
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Dashboard</h1>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <SideBar />
                </div>
                <div className='col'>
                    <Outlet />
                </div>
            </div>            
        </main>
    );
}