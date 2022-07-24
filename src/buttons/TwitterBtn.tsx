import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiFillTwitterSquare } from 'react-icons/ai';

const TwitterBtn = () => {
    return <Button
        className='d-flex justify-content-center align-items-center linkBtns noOutline me-2'
    >
        <AiFillTwitterSquare />
    </Button>
}

export default TwitterBtn