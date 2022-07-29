import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import { ImLinkedin2 } from "react-icons/im";
import { BtnProps } from '../interfaces/interfaces';

const LinkedInBtn: FC<BtnProps> = ({ isOnNavbar }) => {
    const _className = isOnNavbar ? 'd-flex justify-content-center align-items-center position-relative linkBtns noOutline btnsOnNavbar noPadding' : 'd-flex justify-content-center align-items-center linkBtns noOutline me-2'

    const handleOnClick = () => { window.open('https://www.linkedin.com/in/gabriel-torion-13ba92241/', '_blank') };



    return <Button
        className={_className}
        onClick={handleOnClick}
    >
        <ImLinkedin2 className='position-absolute' />
    </Button>
}

export default LinkedInBtn