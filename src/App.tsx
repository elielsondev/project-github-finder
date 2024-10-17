// import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Repository from './pages/Repository';

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id/repos' element={<Repository />} />
        <Route path='*' element={<h1 className='not-found'>Not Found</h1>} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App