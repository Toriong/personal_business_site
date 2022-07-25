

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

export interface BookACallBtnProp {
    isOnBusinessCard?: boolean
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

export interface RobotTestProps {
    setTest: Function
    test: RobotTestObj
    didTestFail: boolean
    setDidTestFail: Function
}
