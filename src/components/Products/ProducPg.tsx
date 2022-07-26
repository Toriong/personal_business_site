import React from 'react'
import ProductTemplate from '../MainPage/products/ProductTemplate';
import ProductTitle from '../MainPage/products/ProductTitle';
import ProductDescription from './ProductDescriptions.json'

// BRAIN DUMP:
// create the product page
// the first section will contain the header for the page: 'MY PRODUCTS'
// have all of the products be mapped onto the dom in the second section
// at the last section have the following: 'More products are on the way!'
// Do you want me to build you something? Shoot me a message! (with a a contact me button below)



const ProductPg = () => {

  return (
    <div className='container-fluid'>
      <section className='row noMargin'>
        <section className='col-12'>
          <h3 className='display-6'>MY PRODUCTS</h3>
        </section>
      </section>
      <section className='col-12 d-flex flex-column justify-content-center'>
        {ProductDescription.map(product => {
          const { texts, title, imgs } = product;
          const _imgs = imgs.map((img: string) => JSON.parse(img))
          return (
            <>
              <ProductTitle title={title} />
              <ProductTemplate imgs={_imgs} descriptionTexts={texts} />
            </>
          )
        }
        )}
      </section>
    </div>
  )
}

export default ProductPg