
export interface ProductTitleProps {
    title?: string
}

export interface ProductTemplateProps extends ProductTitleProps {
    imgs: Array<string>
    descriptionTexts: Array<string>
    isOnProductsPg?: boolean
    productNumString?: string
}

export interface IsFormDataValidReturnVal {
    isValid?: boolean,
    didFirstNameError?: boolean
    didEmailError?: boolean
    didMsgError?: boolean
    didLastNameError?: boolean
    didTimeAvailError?: boolean
}
export interface useGetViewPortHookReturnVal {
    widthPixels: number
}

export interface ProductDesigns {
    mobileImgs: Array<string>
    desktopImgs: Array<string>
    tabletImgs: Array<string>
}

export interface DesignType {
    isMobile?: boolean
    isTablet?: boolean
    isDesktop?: boolean
}

export interface ProductsImgs {
    product1: ProductDesigns
}

export interface SelectedProduct {
    productName?: string
    design?: string
    imgs?: Array<string>
    productNumString?: string
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
