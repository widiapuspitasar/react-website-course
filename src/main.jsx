import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './dist/css/main.css'
import ScrolToTop from './components/ScrolToTop.jsx'
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter} from "react-router-dom"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrolToTop/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
