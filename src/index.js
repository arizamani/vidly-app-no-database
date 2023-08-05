import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import "./scss/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

