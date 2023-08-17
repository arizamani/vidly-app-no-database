
import React,{ lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import _ from 'lodash';

const Layout = lazy(() => import('./pages/layout'));
const Movies = lazy(() => import('./pages/movies'));
const DetailMovies = lazy(() => import('./pages/movieDetails'));
const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/products'));
const ProductDetails = lazy(() => import('./pages/productDetails'));
const NoPage = lazy(() => import('./pages/404'));
const Post = lazy(() => import('./pages/post'));
const Admin = lazy(() => import('./pages/admin/admin'));
const AdminPost = lazy(() => import('./pages/admin/post'));
const AdminUsers = lazy(() => import('./pages/admin/users'));
const Account = lazy(() => import('./pages/account/account'));
const Login = lazy(() => import('./pages/account/login'));
const Register = lazy(() => import('./pages/account/register'));

export default function App() {
  const productsArray = [1,2,3];
  console.log(process.env)
  return (
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route path={process.env.REACT_APP_URI} element={<Layout />}>
              <Route index element={<Home name={"Arash"}/>} />
              <Route path='movies' element={<Movies />} />
              <Route path='movies/:id' element={<DetailMovies/>} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<ProductDetails allowableId={productsArray}/>} />
              <Route path='post' element={<Post />} />
              <Route path='admin' element={<Admin />}>
                <Route path='post' element={<AdminPost />} />
                <Route path='users' element={<AdminUsers />} />
              </Route>
              <Route path='account' element={<Account />}>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Route>              
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </Suspense>
  );
}
