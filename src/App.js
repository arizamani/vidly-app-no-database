
import React from 'react';
import Layout from './pages/Layout';
import Movies from './pages/Movies';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NoPage from './pages/404';
import { Routes, Route } from "react-router-dom";
import _ from 'lodash';
import Post from './pages/post';


export default function App() {
  const productsArray = [1,2,3];

  return (
      <div className='content'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home name={"Arash"}/>} />
            <Route path='movies' element={<Movies />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetails allowableId={productsArray}/>} />
            <Route path='post' element={<Post />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </div>
  );
}

