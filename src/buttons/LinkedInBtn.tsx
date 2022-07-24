import React from 'react'
import Button from 'react-bootstrap/Button';
import { ImLinkedin2 } from "react-icons/im";

const LinkedInBtn = () => {
    return <Button
        className='d-flex justify-content-center align-items-center linkBtns noOutline me-2'
    >
        <ImLinkedin2 />
    </Button>
}

export default LinkedInBtn