import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import LinkedInBtn from '../buttons/LinkedInBtn';
import TwitterBtn from '../buttons/TwitterBtn';
import MyWebSiteBtn from '../buttons/MyWebSiteBtn';
import moment from 'moment'
import '../css/footer.css'
import { businessEmail, phoneNum } from '../contactVals';


const Footer = () => {
    const currentYear = moment().year();

    const handlePhoneNumClick = () => { window.open(`tel:+${phoneNum}`) };

    const handleEmailClick = () => {
        window.location.href = `mailto:${businessEmail}?subject=Subject&body=message%20goes%20here`;
    }



    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='subContainerFooter'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='d-none d-lg-block me-5'>
                        <span>Get connected with me on social networks and my website:</span>
                    </div>
                    <div className='d-flex'>
                        <LinkedInBtn />
                        <TwitterBtn />
                        <MyWebSiteBtn />
                    </div>
                </section>

                <section className=''>
                    <div className='container text-center text-md-start mt-5'>
                        <div className='row mt-3'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-center text-lg-start'>
                                    Gabe's Software Services, LLC
                                </h6>
                                <p className='text-center text-lg-start'>
                                    <i>
                                        "To serve first."
                                    </i>
                                </p>
                            </div>

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='/products' className='text-reset'>
                                        Auto Repair Shop Site
                                    </a>
                                </p>
                                <p>
                                    <a href='/products' className='text-reset'>
                                        View More
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Navigate to:</h6>
                                <p>
                                    <a href='/products' className='text-reset'>
                                        Products
                                    </a>
                                </p>
                                <p>
                                    <a href='/business' className='text-reset'>
                                        Business Info
                                    </a>
                                </p>
                                <p>
                                    <a href='/contact' className='text-reset'>
                                        Contact
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p className='contactTxtFooter' onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                                    <AiOutlineMail className='iconColor me-1' />
                                    gtorion97freelancing@gmail.com
                                </p>
                                <p className='contactTxtFooter' onClick={handlePhoneNumClick} style={{ cursor: 'pointer' }}>
                                    <AiOutlinePhone className='iconColor me-1' />
                                    #425-219-7437
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    @{currentYear} Copyright:
                    <span className='text-reset fw-bold ms-1'>
                        <u>
                            Gabriel Torion
                        </u>
                    </span>
                </div>
            </div>
        </MDBFooter>
    );
}


export default Footer;