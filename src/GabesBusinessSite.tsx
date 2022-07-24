import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar';

const GabesBusinessSite = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default GabesBusinessSite;
