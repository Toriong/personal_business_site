import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import { BtnProps } from '../interfaces/interfaces';

const MyWebSiteBtn: FC<BtnProps> = ({ isOnNavbar }) => {
    const _className = isOnNavbar ? 'd-flex justify-content-center align-items-center position-relative linkBtns noOutline btnsOnNavbar noPadding ms-1' : 'd-flex justify-content-center align-items-center linkBtns noOutline me-2'

    return <Button
        className={_className}
        onClick={() => { alert("In the process of making my personal website! Stay tune!") }}
    >
        GT
    </Button>
}

export default MyWebSiteBtn