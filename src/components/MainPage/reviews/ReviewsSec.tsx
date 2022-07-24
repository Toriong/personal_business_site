import React from 'react'
import ReviewAutoCarousel from './ReviewAutoCarousel';
import '../../../css/mainPage/reviewsSec.css'







const ReviewsSec = () => {
    const dummyReview1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur pariatur velit maxime, adipisci dolorem quas deserunt harum veniam quisquam quia natus, obcaecati animi saepe sit. Suscipit, nulla voluptatibus! Sint corrupti repellendus earum id mollitia suscipit laudantium amet voluptatem nostrum, odit quidem eaque, aut voluptas inventore similique fugiat sunt. Repellendus, sit.'
    const dummyReview2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto molestias autem dolore totam recusandae placeat nulla esse quod ratione. Cum provident est ea voluptatum magni tenetur quisquam nam, quaerat laboriosam, eos esse. Ipsam omnis quo dolorum aliquam sapiente debitis nihil? Iure non expedita possimus modi omnis. Incidunt quibusdam aut similique commodi velit voluptatibus error unde, quod neque aliquid eligendi.'
    const dummyReview3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto molestias autem dolore totam recusandae placeat nulla esse quod ratione. Cum provident est ea voluptatum magni tenetur quisquam nam, quaerat laboriosam, eos esse. Ipsam omnis quo dolorum aliquam sapiente debitis nihil? Iure non expedita possimus modi omnis. Incidunt quibusdam aut similique commodi.'
    const dummyReviews = [{ review: dummyReview1, name: 'Lorem Ipsum', link: "#" }, { review: dummyReview2, name: 'Ipsum Lori', link: "#" }, { review: dummyReview3, name: 'Ipsi Lorax', link: "#" }]
    const areReviewsPresenet = false

    return (
        <section className='container-fluid mt-5 border-bottom reviewsSection'>
            <section className='row d-flex justify-content-center'>
                <section className='column d-flex justify-content-center'>
                    <h3 className='display-5 text-dark text-center'>
                        {areReviewsPresenet ? "What people are saying about my work!" : 'REVIEWS'}
                    </h3>
                </section>
            </section>
            <section className='row d-flex justify-content-center'>
                <section className='col-12 d-flex justify-content-center reviewsCarouselContainer p-4'>
                    {areReviewsPresenet
                        ?
                        <ReviewAutoCarousel reviews={dummyReviews} />
                        :
                        <section className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <span className='display-6'>No Reviews yet! Maybe you will be the first!</span>
                            <span className='display-6 mt-3'>😉</span>
                        </section>
                    }
                </section>
            </section>
        </section>
    )
}

export default ReviewsSec