
import React,{ lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import _ from 'lodash';
const Layout = lazy(() => import('./pages/Layout'));
const Movies = lazy(() => import('./pages/Movies'));
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const NoPage = lazy(() => import('./pages/404'));
const Post = lazy(() => import('./pages/post'));
const Admin = lazy(() => import('./pages/admin'));
const AdminPost = lazy(() => import('./pages/admin/post'));
const AdminUsers = lazy(() => import('./pages/admin/users'));

export default function App() {
  const productsArray = [1,2,3];

  return (
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home name={"Arash"}/>} />
              <Route path='movies' element={<Movies />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<ProductDetails allowableId={productsArray}/>} />
              <Route path='post' element={<Post />} />
              <Route path='admin' element={<Admin />}>
                <Route path='post' element={<AdminPost />} />
                <Route path='users' element={<AdminUsers />} />
              </Route>
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </Suspense>
  );
}

