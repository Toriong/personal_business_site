import React, { FC } from 'react'
import { ProductTemplateProps } from '../../../interfaces/interfaces'
import Button from 'react-bootstrap/Button';
import '../../../css/products/productTemplate.css'

// GOAL: this section will have th products that will offer to my clients 
// on left: will have screen shots of the products 
// on the right: will have the descriptions of the products 



const ProductTemplate: FC<ProductTemplateProps> = ({ imgs, descriptionTexts }) => {
    const [img1, img2, img3] = imgs;
    const [text1, text2, text3, text4] = descriptionTexts

    return (
        <section className='row noMargin noPadding pt-3 d-flex flex-column flex-lg-row'>
            <section className='d-flex flex-column col-12 col-lg-6 productScreenShots'>
                <section className='d-flex flex-column'>
                    <section className='d-flex justify-content-center align-items-center'>
                        <img src={img1} alt="product_img" className='w-50 h-75 rounded productImg' />
                    </section>
                    <section className='d-flex justify-content-between'>
                        <img src={img2} alt="product_img" className='w-50 h-75 productImg me-1' />
                        <img src={img3} alt="product_img" className='w-50 h-75 productImg ms-1' />
                    </section>
                </section>
                <section className='d-flex pt-5 pt-lg-0'>
                    <div className='productShadow  rounded-circle w-100' />
                </section>
            </section>
            <div className='d-flex flex-column col-12 col-lg-6 mt-4 mt-lg-0'>
                <section className='productSection h-75 ps-5 pt-4 pe-5 d-flex flex-column'>
                    <h4 className='bolder text-center text-lg-start descriptionHeading pb-3 pb-lg-0'><u>DESCRIPTION: </u></h4>
                    <span className='text-muted text-center text-lg-start descriptionTxt'><i>{text1}</i></span>
                    <span className='text-muted mt-2 text-center text-lg-start descriptionTxt'><i>{text2}</i></span>
                    <span className='text-muted mt-2 text-center text-lg-start descriptionTxt'><i>{text3}</i></span>
                    <span className='text-muted mt-2 text-center text-lg-start descriptionTxt'>{text4}</span>
                </section>
                <section className='viewProductBtnSec d-flex justify-content-center align-items-center'>
                    <Button variant='primary'>VIEW PRODUCT</Button>
                </section>
            </div>
        </section>
    )
}

export default ProductTemplate