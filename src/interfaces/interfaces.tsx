

export interface ProductTemplateProps {
    imgs: Array<string>
    descriptionTexts: Array<string>
    isOnProductsPg?: boolean
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

export interface BookACallBtnProp {
    isOnBusinessCard?: boolean
    isOnProductsPg?: boolean
    isPulseOn?: boolean
}

export interface BtnProps {
    isOnNavbar?: boolean
}

export interface TestObj {
    name: string
    chars: string
}

export interface RobotTestObj {
    currentTest: TestObj,
    userInput?: string
}

export interface ContactFormState {
    firstName: string
    lastName?: string
    email: string
    phoneNum?: string
    subject?: string
    message: string
    timeAvailability?: string
}


export interface RobotTestProps {
    setTest: Function
    test: RobotTestObj
    didTestFail: boolean
    setDidTestFail: Function
}
