import React, { FC } from 'react'
import { ProductTitleProps } from '../../../interfaces/interfaces'

const ProductTitle: FC<ProductTitleProps> = ({ title }) => (
    <div className='row noMargin noPadding mt-5 fst-italic'>
        <div className='col-12 d-flex justify-content-center align-items-center'>
            <h1 className='display-6 text-center'>{title}</h1>
        </div>
    </div>
)

export default ProductTitle