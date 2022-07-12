import React, { useState } from 'react'
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai";
import { businessEmail, phoneNum } from '../contactVals';
import { AiFillLinkedin } from "react-icons/ai";
import '../css/navBar.css';


const Navbar = () => {
    const [isDropDownMenuOn, setIsDropDownMenuOn] = useState(false);


    const handleBtnClick = () => { setIsDropDownMenuOn(!isDropDownMenuOn) }


    return (
        <div className='unfixed-wrapper'>
            <nav className="navbar bg-secondary navbar-expand-md flex-column navbar-light bg-light fixed-top border-bottom border-top-0 noPadding alignItemsDefault">
                <div className='flex-column w-100 h-100 navMainContainer noPadding'>
                    <div className='position-relative contactContainer d-flex row justify-content-end pt-2'>
                        <div className='col-lg-1 col-md-3 col-sm-5 flex-column contactNavbar d-none d-sm-block d-md-flex position-absolute'>
                            <div className='d-flex justify-content-evenly contactInfo onNavbar '>
                                <span className='text-nowrap display-inline-block w-50 clickAble txt'><AiTwotonePhone />: #{phoneNum}</span>
                                <span className='text-nowrap display-inline-block w-50 clickAble txt'><MdEmail />: {businessEmail}</span>
                            </div>
                            <div className='text-nowrap d-flex justify-content-evenly mt-2 socialMediaAndLocation'>
                                <span className='text-nowrap display-inline-block w-100 socialMedia onNavbar'>
                                    Links:
                                    <a href="#" className='ms-1'>
                                        <AiFillLinkedin className='icon' />
                                    </a>
                                </span>
                                <span className='text-nowrap display-inline-block w-50 clickAble txt'></span>
                            </div>
                        </div>
                        <div className='column d-flex d-sm-none w-100 h-100 justify-content-center align-items-center pt-3 largerHeight mobileHeader noPadding'>
                            <h3 className='display-6 text-lightskyblue'>Gabe's software services</h3>
                        </div>
                    </div>
                    <div className='w-100 h-75 d-flex flex-column row navMenuContainer'>
                        <div className='w-100 h-25 d-none d-sm-flex justify-content-start siteLogo column ps-5'>
                            <h3 className='display-6 text-lightskyblue'>Gabe's software services</h3>
                        </div>
                        <div className="w-100 row collapse navbar-collapse d-none d-md-flex position-relative" id="navbarNav">
                            <ul className="d-md-flex navbar-nav justify-content-end navContainerBtns position-absolute bottom-0">
                                <li className="nav-item active">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/repairs">PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/oil">OUR MEETINGS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/tires">CONTRACTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linksOnNavbar text-secondary" href="/about">CONTACT</a>
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
                                            <a className="nav-link text-muted text-start" href="/repairs">PRODUCTS</a>
                                            <a className="nav-link text-muted text-start" href="/oil">OUR MEETINGS</a>
                                            <a className="nav-link text-muted text-start" href="/tires">CONTRACTS</a>
                                            <a className="nav-link text-muted text-start" href="/about">CONTACT</a>
                                            <div className='text-nowrap d-flex justify-content-center mt-2'>
                                                <span className='text-nowrap socialMedia text-muted w-75 onNavbar'>
                                                    Links:
                                                    <a href="#" className='ms-1'>
                                                        <AiFillLinkedin className='icon' />
                                                    </a>
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