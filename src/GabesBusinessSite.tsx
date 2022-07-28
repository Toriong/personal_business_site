import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPg from './components/Contact/ContactPg';
import Footer from './components/Footer';
import MainPage from './components/MainPage/MainPage';
import ModalContainerComp from './components/ModalContainerComp';
import Navbar from './components/Navbar';
import ProductsPg from './components/Products/ProductsPg';
import { BusinessFormProvider, ModalProvider } from './providers/Providers';

const GabesBusinessSite = () => {
  return (
    <BrowserRouter>
      <BusinessFormProvider>
        <ModalProvider>
          <Navbar />
          <ModalContainerComp />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contact' element={<ContactPg />} />
            <Route path='/products' element={<ProductsPg />} />
          </Routes>
          <Footer />
        </ModalProvider>
      </BusinessFormProvider>
    </BrowserRouter>
  );
}

export default GabesBusinessSite;
