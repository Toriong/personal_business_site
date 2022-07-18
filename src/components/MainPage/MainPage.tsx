import React from 'react'
import '../../css/mainPage/mainPage.css'
import BusinessCard from './BusinessCard';


const MainPage = () => {
    return (
        <div className='container-fluid noPadding noMargin mainPage pt-3'>
            <section className='introPicSec position-relative'>
                <BusinessCard />
            </section>
        </div>
    )
}

export default MainPage