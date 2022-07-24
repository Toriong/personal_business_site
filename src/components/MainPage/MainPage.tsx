import React from 'react'
import '../../css/mainPage/mainPage.css'
import BusinessCard from './BusinessCard';
import ProductSec from './ProductSec';
import ReviewsSec from './reviews/ReviewsSec';



const MainPage = () => {
    return (
        <div className='container-fluid noPadding noMargin mainPage pt-0 pt-sm-3 mainPage'>
            <section className='introPicSec position-relative'>
                <BusinessCard />
            </section>
            <ProductSec />
            <ReviewsSec />
        </div>
    )
}

export default MainPage