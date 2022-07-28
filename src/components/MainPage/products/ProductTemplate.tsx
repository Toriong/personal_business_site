import React, { FC, MouseEvent, useContext, useEffect } from 'react'
import { DesignType, ProductDesigns, ProductsImgs, ProductTemplateProps } from '../../../interfaces/interfaces'
import Button from 'react-bootstrap/Button';
import '../../../css/products/productTemplate.css'
import BookACall from '../../../buttons/BookACall';
import { ModalContext } from '../../../providers/Providers';
import { SelectedProduct } from '../../../interfaces/interfaces';
import productsImgs from '../../../data/productImgs.json';

// BRAIN DUMP:
// if the user is on the product page, show the following buttons: mobile, tablet, desktop

// GOAL: get the string that will act as the selector for the json data that has all of the images of the productsImgs 



const ProductTemplate: FC<ProductTemplateProps> = ({ imgs, descriptionTexts, isOnProductsPg, title, productNumString }) => {
    const { setSelectedProduct, selectedProduct, setIsPicturesModalOn, isPicturesModalOn } = useContext(ModalContext)
    const [img1, img2, img3] = imgs;
    const [text1, text2, text3, text4] = descriptionTexts


    const getDesignImgs = (productNumString?: string): ProductDesigns => {
        const { product1 } = productsImgs;

        if (productNumString === 'product2') {
            // return product2 here
        };

        return product1;
    }

    const addUrlToImgs = (imgs: Array<string>, designType: DesignType): Array<string> => {
        const appUrl = window.location.origin;
        const { isDesktop, isMobile, isTablet } = designType
        if (productNumString === 'product2') {

        }

        if (isDesktop) {
            return imgs.map(img => `${appUrl}/product1Desktop/${img}`);
        }

        if (isTablet) {
            return imgs.map(img => `${appUrl}/product1Tablet/${img}`);
        }

        return imgs.map(img => `${appUrl}/product1Mobile/${img}`);
    }



    const handleBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;
        let _selectedProduct: SelectedProduct = { productName: title, design: name };
        const isMobileSelected = name === 'mobile';
        const isTabletSelected = name === 'tablet';
        const isDesktopSelected = name === 'desktop';

        if (productNumString === 'product1') {
            const designs = getDesignImgs();
            const { desktopImgs, tabletImgs, mobileImgs } = designs;
            let _imgs: any = undefined
            _imgs = isMobileSelected ? addUrlToImgs(mobileImgs, { isMobile: true }) : _imgs
            if (!_imgs) {
                _imgs = isTabletSelected ? addUrlToImgs(tabletImgs, { isTablet: true }) : _imgs
                _imgs = isDesktopSelected ? addUrlToImgs(desktopImgs, { isDesktop: true }) : _imgs
            }
            setSelectedProduct({ ..._selectedProduct, imgs: _imgs });
        };

        setIsPicturesModalOn(true);
    };

    useEffect(() => {
        console.log('selectedProduct: ', selectedProduct);
        console.log('isPicturesModalOn: ', isPicturesModalOn)
    })

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
                <section className='viewProductBtnSec d-flex justify-content-center align-items-center flex-column'>
                    {isOnProductsPg ?
                        <>
                            <section className='d-flex justify-content-center align-items-center'>
                                <h4 className='text-muted fst-italic'>Designs:</h4>
                            </section>
                            <section>
                                <Button name='mobile' variant='secondary' onClick={event => { handleBtnClick(event) }}>
                                    Mobile
                                </Button>
                                <Button name='tablet' variant='secondary' onClick={event => { handleBtnClick(event) }}>
                                    Tablet
                                </Button>
                                <Button name='desktop' variant='secondary' onClick={event => { handleBtnClick(event) }}>
                                    Desktop
                                </Button>
                            </section>
                            <section className='d-flex justify-content-center align-items-center pt-4'>
                                <a className='text-muted fst-italic' href='https://template-auto-shop.herokuapp.com/' target="_blank">Click To View Site</a>
                            </section>
                            <section className='d-flex justify-content-center align-items-center pt-4'>
                                <BookACall isOnProductsPg />
                            </section>
                        </>
                        :
                        <Button variant='primary'>VIEW PRODUCT</Button>
                    }
                </section>
            </div>
        </section>
    )
}

export default ProductTemplate