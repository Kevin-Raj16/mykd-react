import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import "swiper/css/bundle";
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/scss/modal-video.scss';
// import "~slick-carousel/slick/slick.css"; 
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
