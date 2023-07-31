
import React from 'react';
import Layout from './pages/Layout';
import Movies from './pages/Movies';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='movies' element={<Movies />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

