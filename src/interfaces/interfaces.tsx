

export interface ProductTemplateProps {
    imgs: Array<string>
    descriptionTexts: Array<string>
}

export interface ProductTitleProps {
    title: string
}

export interface Review {
    name: string
    review: string
    link: string
}

export interface ReviewsProp {
    reviews: Array<Review>
}