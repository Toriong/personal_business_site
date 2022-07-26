import React from 'react'
import '../../css/mainPage/productSec.css'
import ProductTemplate from './products/ProductTemplate'
import ProductTitle from './products/ProductTitle'
import Button from 'react-bootstrap/Button';


const ProductSec = () => {
    const imgsProduct1 = [`${window.location.origin}/Product1Img1.png`, `${window.location.origin}/Product1Img2.png`, `${window.location.origin}/Product1Img3.png`]
    const product1Texts = ['Are you an auto shop owner?', "Don't have a website?", "Tired of constant phone calls?", "I built a website just for YOU then! Digital communication is essential for any 21st-century business, and I can assure you, once you adopt my website, with its easy-to-use navigation and emailing feature, your business will have a more significant impact, thus producing a much more pleased customer based."]

    return (
        <section className='productSec bg-light'>
            <section className='row noMargin noPadding pt-5'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <h1 className='display-4'>
                        MY PRODUCTS
                    </h1>
                </div>
            </section>
            {/* product one */}
            <ProductTitle title={'Auto Repair Shop Site'} />
            <ProductTemplate imgs={imgsProduct1} descriptionTexts={product1Texts} />
            <section className='row noMargin noPadding'>
                <section className='col-12 d-flex justify-content-center align-items-center mt-5 p-4 viewAllBorderBtnContainer'>
                    <Button variant='secondary'>VIEW ALL PRODUCTS</Button>
                </section>
            </section>
        </section>
    )
}

export default ProductSec