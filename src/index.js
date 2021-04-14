import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';
import 'swiper/swiper-bundle.css';
import './globalStyles/main.scss';
import App from './App';

// STYLES

render (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById ('root')
);
