import React, { FC, useEffect, useRef } from 'react'
import { ProductTitleProps } from '../../../interfaces/interfaces'

const ProductTitle: FC<ProductTitleProps> = ({ title, isOnProductsPg }) => {
    const productTitleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const selectedProduct = localStorage.getItem('viewProduct');
        if (isOnProductsPg && selectedProduct) {
            console.log('selectedProduct: ', selectedProduct)
            const wasProductSelected = title === selectedProduct
            if (wasProductSelected) {
                productTitleRef.current?.scrollIntoView();
                localStorage.removeItem('viewProduct')
            }
        }
    }, [])

    return (
        <div className='row noMargin noPadding mt-5 fst-italic' ref={productTitleRef}>
            <div className='col-12 d-flex justify-content-center align-items-center'>
                <h1 className='display-6 text-center'>{title}</h1>
            </div>
        </div>
    )
}



export default ProductTitle