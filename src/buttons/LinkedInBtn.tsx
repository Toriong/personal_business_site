import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import { ImLinkedin2 } from "react-icons/im";
import { BtnProps } from '../interfaces/interfaces';

const LinkedInBtn: FC<BtnProps> = ({ isOnNavbar }) => {
    const _className = isOnNavbar ? 'd-flex justify-content-center align-items-center position-relative linkBtns noOutline btnsOnNavbar noPadding' : 'd-flex justify-content-center align-items-center linkBtns noOutline me-2'
    return <Button
        className={_className}
    >
        <ImLinkedin2 className='position-absolute' />
    </Button>
}

export default LinkedInBtn