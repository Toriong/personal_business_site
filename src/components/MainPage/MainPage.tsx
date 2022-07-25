import React from 'react'
import '../../css/mainPage/mainPage.css'
import BusinessCard from './BusinessCard';
import LikeWhatYouSee from './LikeWhatYouSee';
import ProductSec from './ProductSec';
import ReviewsSec from './reviews/ReviewsSec';



const MainPage = () => {
    return (
        <div className='container-fluid noPadding noMargin mainPage pt-0 pt-sm-3 mainPage'>
            <section className='row mb-3 noMargin'>
                <section className='col-12 pt-3 pb-3'>
                    <h3 className='display-6 text-muted text-center noMargin'>
                        <i>
                            "To serve first."
                        </i>
                    </h3>
                </section>
            </section>
            <section className='introPicSec position-relative'>
                <BusinessCard />
            </section>
            <ProductSec />
            <ReviewsSec />
            <LikeWhatYouSee />
        </div>
    )
}

export default MainPage