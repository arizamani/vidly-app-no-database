
import React from 'react';
import Layout from './pages/Layout';
import Movies from './pages/Movies';
import Home from './pages/Home';
import NoPage from './pages/404';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home name={"Arash"}/>} />
              <Route path='movies' element={<Movies />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

