import React from 'react'
import BookACall from '../../buttons/BookACall'

const LikeWhatYouSee = () => {


    return (
        <section style={{ height: '300px' }} className='row noMargin likeWhatYouSeeSec pb-4'>
            <section className='col-12 d-flex justify-content-center align-items-center'>
                <h1 className='display-5 text-dark text-center'>Like what you see? Book a call!</h1>
            </section>
            <section className='col-12 d-flex justify-content-center align-items-center'>
                <BookACall />
            </section>
        </section>
    )
}

export default LikeWhatYouSee