import React from 'react'
import Card from 'react-bootstrap/Card';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { businessEmail, currentLocation, phoneNum } from '../../contactVals';
import { IoLocationOutline } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import Button from 'react-bootstrap/Button';
import '../../css/mainPage/businessCard.css'

const { Body, Title, Text, Img, Subtitle } = Card;


const BusinessCard = () => {
    return (
        <Card className='position-absolute myInfoCard border border-white noOutline introPicAnimation'>
            <Body className='h-100'>
                <section className='d-flex flex-column flex-md-row'>
                    <div className='w-50 d-flex justify-content-center'>
                        <div className='w-75 h-100 position-relative rounded meImgContainer'>
                            <div className='position-absolute overlay w-100 h-100 rounded' />
                            <Img
                                src={`${window.location.origin}/me.png`}
                                className='meImg w-100 h-100 rounded'
                            />
                        </div>
                    </div>
                    <div className='w-50'>
                        <Text className='text-muted d-flex' id='helloEveryBodyTxt'>
                            <Text className='pe-2 shake'>HELLO EVERYBODY!</Text>
                            I AM
                        </Text>
                        <Title className='display-6'>GABRIEL TORION</Title>
                        <Subtitle className='fst-italic'>Freelance Software Developer</Subtitle>
                        <Text className='text-muted mt-3 welcomeTxt'>
                            My passion is everything software development, and I am here to help you accomplish your goals using code!
                        </Text>
                        <Text className='text-muted mt-3 welcomeTxt'>
                            I am here to help! Let's get in touch!
                        </Text>
                        <section className='container'>
                            <div className='row d-flex'>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <AiOutlineMail className='iconColor' />
                                </div>
                                <div className='col-9 position-relative'>
                                    <span className='text-muted position-absolute contactTxt'>{businessEmail}</span>
                                </div>
                            </div>
                            <div className='row d-flex mt-2'>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <AiOutlinePhone className='iconColor' />
                                </div>
                                <div className='col-9 position-relative'>
                                    <span className='text-muted position-absolute contactTxt'>#{phoneNum}</span>
                                </div>
                            </div>
                            <div className='row d-flex mt-2'>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    <IoLocationOutline className='iconColor' />
                                </div>
                                <div className='col-9 position-relative'>
                                    <span className='text-muted position-absolute contactTxt'>{currentLocation}</span>
                                </div>
                            </div>
                            <div className='row d-flex mt-4'>
                                <div className='col-2'>
                                    <Button
                                        className='d-flex justify-content-center align-items-center linkBtns noOutline'
                                    >
                                        <ImLinkedin2 />
                                    </Button>
                                </div>
                                <div className='col-2'>
                                    <Button
                                        className='d-flex justify-content-center align-items-center linkBtns noOutline personalWebsiteBtn'
                                    >
                                        GT
                                    </Button>
                                </div>
                            </div>
                            <div className='row d-none d-xl-flex businessCalBtnContainer'>
                                <div className='col-12 d-flex justify-content-center align-items-center'>
                                    <Button
                                        variant='primary'
                                        className='d-flex justify-content-center align-items-center noOutline businessCalBtn pulse'
                                    >
                                        SET UP A BUSINESS CALL!
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className='container-fluid d-block d-xl-none businessCallBtnContainer'>
                    <section className='row'>
                        <section className='col-12 d-flex justify-content-center align-items-center'>
                            <Button
                                variant='primary'
                                className='d-flex justify-content-center align-items-center noOutline businessCalBtn pulse'
                            >
                                SET UP A BUSINESS CALL!
                            </Button>
                        </section>
                    </section>
                </section>
            </Body>
        </Card>
    )
}

export default BusinessCard