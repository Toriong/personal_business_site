import React, { FC } from 'react'
import Button from 'react-bootstrap/Button';
import { BookACallBtnProp } from '../interfaces/interfaces';

const BookACall: FC<BookACallBtnProp> = ({ isOnBusinessCard }) => {
    return <Button
        variant='primary'
        style={{ fontWeight: '700' }}
        className='d-flex justify-content-center align-items-center noOutline businessCalBtn pulse'
    >
        {isOnBusinessCard ? 'SET UP A BUSINESS CALL!' : 'BOOK A CALL!'}
    </Button>
}

export default BookACall