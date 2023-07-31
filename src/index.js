import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import "./index.scss";
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const root = createRoot(document.getElementById('root'));
console.log("index");
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

