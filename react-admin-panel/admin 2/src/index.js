import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
axios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token') || 'Hello'
  return config
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
