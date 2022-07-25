import React, { useContext, MouseEvent } from 'react'
import { BusinessFormContext } from '../../providers/Providers'
import Button from 'react-bootstrap/Button';
import { BsFillCircleFill, BsCircle } from "react-icons/bs";
import '../../css/contact/contactPg.css'
import ContactForm from './ContactForm';

const ContactPg = () => {
    const { isGeneralEnquiryOn, setIsGeneralEnquiryOn } = useContext(BusinessFormContext);

    const handleBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { name } = event.currentTarget;
        setIsGeneralEnquiryOn(name !== 'businessCall')
    }


    return (
        <div className='contactPg container-fluid noMargin'>
            <section className='row noMargin noPadding'>
                <section className='col-12 d-flex justify-content-center align-items-center pt-4 pb-4'>
                    <h1 className='display-5 text-center'>{isGeneralEnquiryOn ? "General Enquiry" : "Schedule A Business Call"} </h1>
                </section>
                <section className='col-12 d-flex justify-content-center align-items-center pt-2'>
                    <h4 className='display-6 text-center'>{isGeneralEnquiryOn ? "Do you want me to build you something? Let's talk!" : "Let's accomplish your goals!"}</h4>
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
            <section className='contactFormSec pt-5 d-flex justify-content-center'>
                <ContactForm />
            </section>
        </div>
    )
}

export default ContactPg