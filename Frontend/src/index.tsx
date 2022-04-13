import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import HomePage from './pages/Home';
import { SignUp } from './pages/Auth/SignUp';
import { Login } from './pages/Auth/Login';

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
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<SignUp />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);