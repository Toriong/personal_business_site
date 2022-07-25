import React, { useContext, MouseEvent } from 'react'
import { BusinessFormContext } from '../../providers/Providers'
import Button from 'react-bootstrap/Button';
import { BsFillCircleFill, BsCircle } from "react-icons/bs";
import '../../css/contact/contactPg.css'

const ContactPg = () => {
    const { isGeneralEnquiryOn, setIsGeneralEnquiryOn } = useContext(BusinessFormContext);

    const handleBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;
        setIsGeneralEnquiryOn(name !== 'businessCall')
    }


    return (
        <div className='contactPg container noMargin noPadding'>
            <section className='row noMargin noPadding'>
                <section className='col-12 d-flex justify-content-center align-items-center pt-4 pb-4'>
                    <h1 className='display-5'>{isGeneralEnquiryOn ? "General Enquiry" : "Schedule A Business Call"} </h1>
                </section>
                <section className='col-12 d-flex justify-content-center align-items-center pt-2'>
                    <h4 className='display-6'>{isGeneralEnquiryOn ? "You have a question? Let's talk!" : "Let's accomplish your goals!"}</h4>
                </section>
                <section className='col-12 d-flex justify-content-center align-items-center mt-5'>
                    <button name='businessCall' className='me-2 noBtnStyles formTypeBtn' onClick={event => { handleBtnClick(event) }}>
                        {!isGeneralEnquiryOn ? <BsFillCircleFill /> : <BsCircle />}
                    </button>
                    <button className='ms-2 noBtnStyles formTypeBtn' onClick={event => { handleBtnClick(event) }}>
                        {isGeneralEnquiryOn ? <BsFillCircleFill /> : <BsCircle />}
                    </button>
                </section>
            </section>
        </div>
    )
}

export default ContactPg