//REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//VIEWS
import Dashboard from './views/Dashboard';
import Setting from './views/Setting'
import Community from './views/Community'
import Error from './views/Error'
import Home from './views/Home'; 

//COMPONENTS
import Header  from './compoments/Header'
import Footer from './compoments/Footer'

//STYLE
import './style.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profil/:id' element={<Dashboard/>} />
          <Route path='/setting' element={<Setting/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/*' element={<Error/>} />
      </Routes> 
      <Footer/>
    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

