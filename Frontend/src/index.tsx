import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './Home';
import About from './About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);