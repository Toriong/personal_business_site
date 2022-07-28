import React, { useContext, useState, MouseEvent, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import useGetViewPortWidth from '../customHooks/useGetViewPortWidth';
import { ModalContext } from '../providers/Providers';
import Button from 'react-bootstrap/Button';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import '../css/modals/modalContainerComp.css'

const { Header, Title, Body } = Modal

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

    const handleBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { value: num } = event.currentTarget;
        setIndex(index + Number(num));
    }

    useEffect(() => {
        return () => {
            setIndex(0)
        }
    }, [isPicturesModalOn])

    return (
        <>
            <Modal show={isPicturesModalOn} fullscreen={true} onHide={handleOnHide} className=''>
                <Header closeButton>
                    <Title className='text-center w-100'>{`${productName} (${design})`}</Title>
                </Header>
                <Body className='d-flex flex-column w-100 position-relative noPadding pt-2'>
                    <section className='d-flex justify-content-center h-100'>
                        {/* show pictures here */}
                        {imgs?.length && <img src={imgs[index]} alt='product_img' className={imgClassName} />}
                    </section>
                    <section className='d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 w-100 pb-4'>
                        <section className='d-flex pb-4'>
                            {imgs?.length && <span>{`${index + 1}/${imgs.length}`}</span>}
                        </section>
                        <section>
                            <Button variant='secondary' className='me-2' value={-1} onClick={event => { handleBtnClick(event) }} disabled={index <= 0}><IoMdArrowRoundBack /></Button>
                            {imgs?.length && <Button variant='secondary' className='m2-2' value={1} disabled={index >= (imgs.length - 1)} onClick={event => { handleBtnClick(event) }}><IoMdArrowRoundForward /> </Button>}
                        </section>
                    </section>
                </Body>
            </Modal>
        </>
    )
}

export default ModalContainerComp