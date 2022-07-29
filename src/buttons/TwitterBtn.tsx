import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BtnProps } from '../interfaces/interfaces';
import '../../src/css/buttons.css'

const TwitterBtn: FC<BtnProps> = ({ isOnNavbar }) => {
    const _className = isOnNavbar ? 'd-flex justify-content-center align-items-center position-relative linkBtns noOutline btnsOnNavbar noPadding ms-1' : 'd-flex justify-content-center align-items-center linkBtns noOutline me-2'
    return <Button
        data-hover="Will make one!"
        className={_className}
        onClick={() => { alert("In the process of making one! Stay tune!") }}
    >
        <AiFillTwitterSquare />
    </Button>
}

export default TwitterBtn