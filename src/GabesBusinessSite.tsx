import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPg from './components/Contact/ContactPg';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar';
import { BusinessFormProvider } from './providers/Providers';

const GabesBusinessSite = () => {
  return (
    <BrowserRouter>
      <BusinessFormProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/contact' element={<ContactPg />} />
        </Routes>
        <Footer />
      </BusinessFormProvider>
    </BrowserRouter>
  );
}

export default GabesBusinessSite;
