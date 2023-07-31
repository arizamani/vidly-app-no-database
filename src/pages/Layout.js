
import React from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Outlet} from "react-router-dom";

export default function Layout(){
    
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}