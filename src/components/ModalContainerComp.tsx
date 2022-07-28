import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { ModalContext } from '../providers/Providers';

const { Header, Title, Body } = Modal


// GOAL: when the user clicks on a product, get the following:
// the product name
// the design: either mobile, tablet or desktop
// all of the images that will be displayed



// END-GOAL: display the images onto the modal
// the first img is displayed onto the modal


// GOAL: insert all of the images into the selectedProduct.imgs based on what the design type that the user clicked on 
// all of the imgs are attained for the specific design type
// get all of the images based on the design type
// get the design type 
// the pictures modal is displayed onto the DOM 
// the user clicks on one of the design types buttons

const ModalContainerComp = () => {
    const { isPicturesModalOn, setIsPicturesModalOn, selectedProduct } = useContext(ModalContext);
    const [index, setIndex] = useState(0)

    const { productName, design, imgs } = selectedProduct;

    const handleOnHide = () => { setIsPicturesModalOn(false) };

    return (
        <>
            <Modal show={isPicturesModalOn} fullscreen={true} onHide={handleOnHide}>
                <Header closeButton>
                    <Title className='text-center w-100'>{`${productName} (${design})`}</Title>
                </Header>
                <Body className='d-flex flex-column justify-content-center align-items-center'>
                    <section className='d-flex justify-content-center align-items-center'>
                        {/* show pictures here */}
                        {imgs?.length && <img src={imgs[0]} alt='product_img' className='w-50 w-75' />}
                    </section>
                    <section>

                    </section>
                </Body>
            </Modal>
        </>
    )
}

export default ModalContainerComp