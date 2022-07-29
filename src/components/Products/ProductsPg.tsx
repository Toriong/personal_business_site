import React from 'react'
import ProductTemplate from '../MainPage/products/ProductTemplate';
import ProductTitle from '../MainPage/products/ProductTitle';
import ProductDescription from './ProductDescriptions.json'
import '../../css/productPg/productPg.css'
import BookACall from '../../buttons/BookACall';



const ProductsPg = () => {

  return (
    <div className='container-fluid productPg noMargin noPadding'>
      <section className='row noMargin pt-4 pb-4'>
        <section className='col-12 d-flex justify-content-center align-items-center'>
          <h3 className='display-4 text-center'>MY PRODUCTS</h3>
        </section>
      </section>
      <section className='row noMargin pb-5 border-bottom bg-light'>
        <section className='col-12 d-flex flex-column justify-content-center'>
          {ProductDescription.map(product => {
            const { texts, title, imgs, productNumString } = product;
            const _imgs = imgs.map((img: string) => `${window.location.origin}${img}`)
            return (
              <>
                <ProductTitle title={title} />
                <ProductTemplate imgs={_imgs} descriptionTexts={texts} isOnProductsPg productNumString={productNumString} title={title} />
              </>
            )
          }
          )}
        </section>
      </section>
      <section className='row noMargin pt-5 pb-5'>
        <section className='col-12 d-flex flex-column justify-content-center'>
          <span className='display-6 text-center'>More products are on the way! Stay tune! </span>
        </section>
      </section>
      <section className='row noMargin pt-5 pb-5 border-top'>
        <section className='col-12 d-flex flex-column justify-content-center'>
          <span className='display-6 text-center'>Do you have an idea? If it can programmed, shoot me a message!</span>
        </section>
        <section className='col-12 d-flex justify-content-center pt-5 pb-5'>
          <BookACall isPulseOn />
        </section>
      </section>
    </div>
  )
}

export default ProductsPg