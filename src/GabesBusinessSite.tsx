import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar';
import logo from './logo.svg';

const GabesBusinessSite = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default GabesBusinessSite;
