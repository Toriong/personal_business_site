import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import { BookACallBtnProp } from '../interfaces/interfaces';

const BookACall: FC<BookACallBtnProp> = ({ isOnBusinessCard, isOnProductsPg, isPulseOn }) => {

    const handleBtnClick = () => { window.location.href = `${window.location.origin}/contact` };

    return <Button
        variant='primary'
        style={{
            fontWeight: '700'
        }}
        className={`d-flex justify-content-center align-items-center noOutline businessCalBtn ${isPulseOn ? 'pulse' : ''}`}
        onClick={handleBtnClick}
    >
        {!isOnProductsPg ?
            isOnBusinessCard ? 'SET UP A BUSINESS CALL!' : 'CONTACT ME!'
            :
            "Do you want to use this product? Let's set up a business call!"
        }
    </Button>
}

export default BookACall