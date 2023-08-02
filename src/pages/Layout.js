
import React from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Outlet} from "react-router-dom";

export default function Layout(){
    
    return (
        <div className='content d-flex flex-column hmin-100'>
            <Header additionalClassName={""} menus={[
                {Home: "/"},
                {Movies: "/movies"},
                {Customers: "/customers"},
                {Rental: "/rentals"},
                {Post: "/post"},
                {Product: "/products"},
                {Admin: "/admin/post"},
            ]}/>
            <Outlet />
            <Footer additionalClassName={"mt-auto mb-0"}/>
        </div>
    );
}