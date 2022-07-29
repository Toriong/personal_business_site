import React, { useState } from 'react'
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai";
import { businessEmail, phoneNum } from '../contactVals';
import { AiFillLinkedin } from "react-icons/ai";
import '../css/navBar.css';
import LinkedInBtn from '../buttons/LinkedInBtn';
import TwitterBtn from '../buttons/TwitterBtn';
import MyWebSiteBtn from '../buttons/MyWebSiteBtn';


const Navbar = () => {
    const [isDropDownMenuOn, setIsDropDownMenuOn] = useState(false);

    const handleBtnClick = () => { setIsDropDownMenuOn(!isDropDownMenuOn) }

    const handleEmailClick = () => {
        window.location.href = `mailto:${businessEmail}?subject=Subject&body=message%20goes%20here`;
    }

    const handlePhoneNumClick = () => { window.open(`tel:+${phoneNum}`) }


    return (
        <div className='unfixed-wrapper'>
            <nav className="navbar bg-secondary navbar-expand-md flex-column navbar-light bg-light fixed-top border-bottom border-top-0 noPadding alignItemsDefault noMargin">
                <div className='flex-column w-100 h-100 navMainContainer noPadding noMargin'>
                    <div className='position-relative contactContainer d-flex row justify-content-end pt-2 noMargin'>
                        <div className='col-lg-1 col-md-3 col-sm-5 flex-column contactNavbar d-none d-md-flex position-absolute'>
                            <div className='d-flex justify-content-evenly contactInfo onNavbar '>
                                <span className='text-nowrap display-inline-block w-50 clickAble txt' style={{ cursor: 'pointer' }} onClick={handlePhoneNumClick}><AiTwotonePhone />: #{phoneNum}</span>
                                <span className='text-nowrap display-inline-block w-50 clickAble txt' style={{ cursor: 'pointer' }} onClick={handleEmailClick}><MdEmail />: {businessEmail}</span>
                            </div>
                            <div className='text-nowrap d-flex justify-content-evenly mt-2 socialMediaAndLocation'>
                                <div>
                                    <span>Links: </span>
                                </div>
                                <div className='d-flex w-100 align-items-center justify-content-start pt-1 ps-1'>
                                    <LinkedInBtn isOnNavbar />
                                    <TwitterBtn isOnNavbar />
                                    <MyWebSiteBtn isOnNavbar />
                                </div>
                                <span className='text-nowrap display-inline-block w-50 clickAble txt'></span>
                            </div>
                        </div>
                        <div className='column d-flex d-md-none w-100 h-100 justify-content-center align-items-center pt-3 largerHeight mobileHeader noPadding'>
                            <h3 className='display-6 text-lightskyblue logoTxt websiteTitleOnMobile'>Gabe's software services, LLC</h3>
                        </div>
                    </div>
                    <div className='w-100 h-75 d-flex flex-column row navMenuContainer'>
                        <div className='h-100 d-none d-md-flex justify-content-center justify-content-md-start align-items-center siteLogo column ps-5'>
                            <h3 className='display-6 text-lightskyblue logoTxt'>Gabe's software services, LLC</h3>
                        </div>
                        <div className="w-100 row collapse navbar-collapse d-none d-md-flex position-relative" id="navbarNav">
                            <ul className="d-md-flex navbar-nav justify-content-end navContainerBtns position-absolute bottom-0">
                                <li className="nav-item active">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/products">PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/business">BUSINESS INFO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                        <div className='w-100 row d-flex d-md-none justify-content-end h-100 position-relative noPadding noMargin'>
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropDownBtn position-absolute d-flex justify-content-center align-items-center"
                                    type="button"
                                    id="dropdownMenuButton"
                                    onClick={handleBtnClick}
                                >
                                    {isDropDownMenuOn ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
                                </button>
                                {isDropDownMenuOn &&
                                    <div
                                        className="dropdown-menu noPadding border border-top-0 border-right-0 border-bottom-0 d-flex flex-column position-fixed w-25 dropDownSideMenu"
                                    >
                                        <div className='w-100 dropDownNavContainer'>
                                            <a className="nav-link text-muted text-start" href="/">HOME</a>
                                            <a className="nav-link text-muted text-start" href="/products">PRODUCTS</a>
                                            <a className="nav-link text-muted text-start" href="/business">BUSINESS INFO</a>
                                            <a className="nav-link text-muted text-start" href="/contact">CONTACT</a>
                                            <div className='text-nowrap d-flex justify-content-center mt-2'>
                                                <span style={{ cursor: 'pointer' }} className='text-nowrap socialMedia text-muted w-75 onNavbar contactTxtOnMobile' onClick={handleEmailClick}>
                                                    <MdEmail /> gtorion97freelancing@gmail.com
                                                </span>
                                            </div>
                                            <div className='text-nowrap d-flex justify-content-center mt-2'>
                                                <span style={{ cursor: 'pointer' }} className='text-nowrap socialMedia text-muted w-75 onNavbar contactTxtOnMobile' onClick={handlePhoneNumClick}>
                                                    <AiTwotonePhone />
                                                    #425-219-7437
                                                </span>
                                            </div>
                                            <div className='text-nowrap d-flex justify-content-center mt-2'>
                                                <span className='text-nowrap socialMedia text-muted w-75 onNavbar contactTxtOnMobile d-flex'>
                                                    <i className='me-1'>
                                                        Links:
                                                    </i>
                                                    <LinkedInBtn isOnNavbar />
                                                    <TwitterBtn isOnNavbar />
                                                    <MyWebSiteBtn isOnNavbar />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar