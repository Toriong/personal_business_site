import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import { AiFillStar } from "react-icons/ai";
import { ReviewsProp } from '../../../interfaces/interfaces';

const ReviewAutoCarousel: FC<ReviewsProp> = ({ reviews }) => {
    const [index, setIndex] = useState(0);
    const review = reviews[index]
    const { name, review: _review, link } = review;
    const stars = Array(5).fill("");

    useEffect(() => {
        let intervalTimer = setInterval(() => {
            if (index === 2) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 4000);
        return () => { clearInterval(intervalTimer); }
    }, [index]);

    return (
        <div className='container-fluid reviewsCarousel'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='column d-flex justify-content-center align-items-center'>
                    {stars.map((_) => <AiFillStar className='text-warning display-5' />)}
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center mt-4 reviewTxtContainer'>
                <div className='column d-flex justify-content-center align-items-center'>
                    <a
                        href={link}
                        target='_blank'
                        rel='noreferrer'
                        className='text-center link-dark text-decoration-none linkCss display-inline-block'
                    >
                        <span className='text-center text-dark p-4 d-inline-block'>"{_review}"</span>
                    </a>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center mt-2'>
                <div className='column d-flex justify-content-center align-items-center'>
                    <span className='text-dark reviewer'>-{name}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewAutoCarousel