import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './Home';
import About from './About';
import { SignUp } from './Auth/SignUp';
import { Login } from './Auth/Login';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);