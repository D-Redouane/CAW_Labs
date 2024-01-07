import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import $ from 'jquery';
import 'swiper/swiper-bundle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Example use of '$'
$('body').css('background-color', 'lightgray');
