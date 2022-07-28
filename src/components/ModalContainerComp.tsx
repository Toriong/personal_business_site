import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import useGetViewPortWidth from '../customHooks/useGetViewPortWidth';
import { ModalContext } from '../providers/Providers';
import '../css/modals/modalContainerComp.css'

const { Header, Title, Body } = Modal


// GOAL: when the user clicks on a product, get the following:
// the product name
// the design: either mobile, tablet or desktop
// all of the images that will be displayed



// END-GOAL: display the images onto the modal
// the first img is displayed onto the modal


// BRAIN DUMP NOTES:



const ModalContainerComp = () => {
    const { isPicturesModalOn, setIsPicturesModalOn, selectedProduct } = useContext(ModalContext);
    const { widthPixels } = useGetViewPortWidth()
    const [index, setIndex] = useState(0)

    const { productName, design, imgs } = selectedProduct;

    const handleOnHide = () => { setIsPicturesModalOn(false) };

    let imgClassName = (design === 'mobile') ? 'h-75 shadow mobileImg' : 'otherDesigns h-75 shadow'

    if (widthPixels <= 767) {
        imgClassName = (design === 'mobile') ? 'h-75 shadow mobileImg' : 'h-75 otherDesignsMobile shadow'
    }






    return (
        <>
            <Modal show={isPicturesModalOn} fullscreen={true} onHide={handleOnHide} className=''>
                <Header closeButton>
                    <Title className='text-center w-100'>{`${productName} (${design})`}</Title>
                </Header>
                <Body className='d-flex flex-column w-100'>
                    <section className='d-flex justify-content-center h-100'>
                        {/* show pictures here */}
                        {imgs?.length && <img src={imgs[0]} alt='product_img' className={imgClassName} />}
                    </section>
                </Body>
            </Modal>
        </>
    )
}

export default ModalContainerComp