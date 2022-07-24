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
        <section className='row noMargin noPadding pt-3 d-flex flex-column flex-md-row'>
            <section className='d-flex flex-column col-12 col-md-6 productScreenShots'>
                <section className='d-flex flex-column'>
                    <section className='d-flex justify-content-center align-items-center'>
                        <img src={img1} alt="product_img" className='w-50 h-75 rounded' />
                    </section>
                    <section className='d-flex justify-content-between'>
                        <img src={img2} alt="product_img" className='w-50 h-75' />
                        <img src={img3} alt="product_img" className='w-50 h-75' />
                    </section>
                </section>
                <section className='d-flex justify-content-center align-items-center'>
                    <div className='productShadow  rounded-circle' />
                </section>
            </section>
            <div className='d-flex flex-column col-12 col-md-6'>
                <section className='productSection h-75 ps-5 pt-4 pe-5 d-flex flex-column'>
                    <h4 className='bolder'><u>DESCRIPTION: </u></h4>
                    <span className='text-muted'>{text1}</span>
                    <span className='text-muted mt-2'>{text2}</span>
                    <span className='text-muted mt-2'>{text3}</span>
                    <span className='text-muted mt-2'>{text4}</span>
                </section>
                <section className='viewProductBtnSec d-flex justify-content-center align-items-center'>
                    {/* put button here to take the user to the product page */}
                    <Button variant='primary'>VIEW PRODUCT</Button>
                </section>
            </div>
        </section>
    )
}

export default ProductTemplate