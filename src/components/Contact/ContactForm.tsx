import React, { useState, ChangeEvent, MouseEvent, useRef, useContext, useMemo } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RobotTestObj, TestObj } from '../../interfaces/interfaces';
import RobotTest from './RobotTest';
import { BusinessFormContext } from '../../providers/Providers'

const { Group, Control, Label, Text } = Form;

const robotTestData = [
    {
        "name": "test1",
        "chars": "53g9B"
    },
    {
        "name": "test2",
        "chars": "dbYUq"
    },
    {
        "name": "test3",
        "chars": "pGUG6"
    }
]


const ContactForm = () => {
    // const { setIsSendingEmailModalOn, setIsResultsModalForSubmitOn, setModalTxt, setModalHeader, isSendingEmailModalOn } = useContext(ModalContext)
    const { isGeneralEnquiryOn } = useContext(BusinessFormContext)
    const getTest = (tests: Array<TestObj>): TestObj => {
        const randomIndex = Math.floor(Math.random() * tests.length);
        return robotTestData[randomIndex]
    };
    const _currentTest = useMemo(() => getTest(robotTestData), [])
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [didTestFail, setDidTestFail] = useState(false)
    const formDefaultVal = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        subject: '',
        message: '',
        timeAvailability: ''
    }
    const [form, setForm] = useState(formDefaultVal);
    const [test, setTest] = useState<RobotTestObj>({ currentTest: _currentTest, userInput: "" });
    const { firstName, lastName, email, phoneNum, subject, message, timeAvailability } = form;



    // const handleReCAPTCHAChange = (value: any) => { !value && alert('Verification has expired.'); };

    const getIsEmailInvalid = (email: string): boolean => {
        const isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        const emailChars = email.split("");
        const hasPeriod = emailChars.includes('.');
        const hasAtSymbol = emailChars.includes('@');
        const allPeriods = emailChars.filter(emailVal => emailVal === ".");
        const allAtSymbols = emailChars.filter(emailVal => emailVal === '@');
        if (allPeriods.length > 1) {
            console.log('what is your name?')
            return true;
        } else if (allAtSymbols.length > 1) {
            return true
        } else if (!hasPeriod) {
            return true
        } else if (!hasAtSymbol) {
            return true
        } else if (hasPeriod && (allPeriods.length === 1) && (allAtSymbols.length === 1)) {
            const emailSplitByPeriod = email.split(".");
            const isOrgOrCom = (emailSplitByPeriod[emailSplitByPeriod.length - 1] === 'org') || (emailSplitByPeriod[emailSplitByPeriod.length - 1] === 'com') || (emailSplitByPeriod[emailSplitByPeriod.length - 1] === 'net');
            return !isOrgOrCom
        }

        return isValid;
    };

    const [isFirstNameError, setIsFirstNameError] = useState(false);
    const [isLastNameError, setIsLastNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isTimeAvailabilityError, setIsTimeAvailabilityError] = useState(false);
    const [didMsgError, setDidMsgError] = useState(false);

    const handleOnSubmit = (event: MouseEvent<HTMLButtonElement>) => {

    };



    const presentResponseModal = (headerTxt: string, bodyTxt: string) => {
        // setModalHeader(headerTxt);
        // setModalTxt(bodyTxt);
        // setIsResultsModalForSubmitOn(true);
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.currentTarget;
        const isOnEmail = name === 'email';
        const isOnFirstName = name === 'firstName';
        const isOnLastName = name === 'lastName';
        const isOnMessageInput = name === 'message';
        const isOnTimeAvailability = name === 'timeAvailability';

        if (isOnEmail) {
            (value === '') ? setIsEmailInvalid(false) : setIsEmailInvalid(getIsEmailInvalid(value));
            setIsEmailError(false);
        };
        isOnLastName && setIsLastNameError(false);
        isOnFirstName && setIsFirstNameError(false);
        isOnMessageInput && setDidMsgError(false);
        isOnTimeAvailability && setIsTimeAvailabilityError(false);
        setForm(form => { return { ...form, [name]: value } });;
    };


    return (
        <Form className='position-relative d-flex flex-column justify-content-center justify-content-sm-start contactForm'>
            <Group className="row mt-4 nameInputGroup" controlId="formNameInput">
                <div className='col-6 nameContainerSM'>
                    <Label className='w-100 text-start fw-bold'>*Name</Label>
                    <Control
                        type="text"
                        placeholder="First"
                        name='firstName'
                        value={firstName}
                        onChange={event => { handleOnChange(event as any) }}
                        style={{ border: isFirstNameError ? 'solid red .5px' : '1px solid #ced4da', color: isFirstNameError ? 'red' : "#212529" }}
                    />
                    <div className='d-flex flex-column'>
                        <Text style={{ fontSize: '8px', height: '14px' }} className="pl-5 text-danger text-start">
                            {isFirstNameError && '*This field is required. Please enter first name.'}
                        </Text>
                    </div>
                </div>
                <div className='col-6 nameContainerSM'>
                    <Label className='text-white'>dummyTxt</Label>
                    <Control
                        type="email"
                        placeholder="Last"
                        name='lastName'
                        value={lastName}
                        onChange={event => { handleOnChange(event as any) }}
                        style={{ border: isLastNameError ? 'solid red .5px' : '1px solid #ced4da', color: isLastNameError ? 'red' : "#212529" }}
                    />
                    <div className='d-flex flex-column'>
                        <Text style={{ fontSize: '8px', height: '14px' }} className="pl-5 text-danger text-start">
                            {isLastNameError && '*This field is required. Please enter last name.'}
                        </Text>
                    </div>
                </div>
            </Group>
            <Group className="d-block d-sm-none firstNameContainer mb-3" controlId="formBasicPassword">
                <Label className='fw-bold'>*First Name</Label>
                <Control type="text" placeholder="Enter first name" name='firstName' value={firstName} style={{ color: isFirstNameError ? 'red' : "#212529", border: isFirstNameError ? 'solid red .5px' : '1px solid #ced4da' }} onChange={event => { handleOnChange(event as any) }} />
                {isFirstNameError &&
                    <Text className="pl-5 text-danger" style={{ fontSize: '8px' }}>
                        *This field is required. Please enter first name.
                    </Text>
                }
            </Group>
            <Group className="mb-3 d-block d-sm-none lastNameContainer" controlId="formBasicPassword">
                <Label className='fw-bold'>*Last Name</Label>
                <Control
                    type="text"
                    placeholder="Enter last name"
                    name='lastName'
                    value={lastName}
                    onChange={event => { handleOnChange(event as any) }}
                    style={{ border: isLastNameError ? 'solid red .5px' : '1px solid #ced4da', color: isLastNameError ? 'red' : "#212529" }}
                />
                {isLastNameError &&
                    <Text className="pl-5 text-danger" style={{ fontSize: '8px' }}>
                        *This field is required. Please enter last name.
                    </Text>
                }
            </Group>
            <Group controlId="formBasicPassword" className='emailInputGroup'>
                <Label className='fw-bold'>*Email</Label>
                <Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    style={{ border: ((isEmailInvalid || isEmailError) && (form.email || isEmailError)) ? 'solid red .5px' : '1px solid #ced4da', color: ((isEmailInvalid || isEmailError) && (form.email || isEmailError)) ? 'red' : "#212529" }}
                    onChange={event => { handleOnChange(event as any) }}
                    value={email}
                    required
                />
                <div className='position-relative'>
                    <span className='pl-5 text-danger position-absolute' style={{ fontSize: '8px', top: '5px' }}>
                        {isEmailError && '*This field is required.Please enter a valid email.'}
                        {(isEmailInvalid && form.email) && "*Invalid email. Must have only one '.', one '@', and either '.org', '.com', or '.net' for email's top level domain. No 'www'."}
                    </span>
                </div>
            </Group>
            <Group className="mb-3" controlId="formBasicPassword">
                <Label className='fw-bold'>Phone #</Label>
                <Control
                    type="text"
                    pattern='[0-9]*'
                    placeholder="Enter phone #"
                    name='phoneNum'
                    onChange={event => { handleOnChange(event as any) }}
                    value={phoneNum}
                />
            </Group>
            {!isGeneralEnquiryOn &&
                <>
                    <Group className="mb-3" controlId="formBasicPassword">
                        <Label className='fw-bold'>*Time Availability</Label>
                        <Control
                            type="text"
                            placeholder="Example: Mon-Fri, 10am-3pm"
                            name='timeAvailability'
                            style={{ border: isTimeAvailabilityError ? 'solid red .5px' : '1px solid #ced4da' }}
                            onChange={event => { handleOnChange(event as any) }}
                            value={timeAvailability}
                        />
                    </Group>
                    <Text className="pl-5 text-danger" style={{ fontSize: '8px', height: '20px' }}>
                        {isTimeAvailabilityError && '*This field is required. Please enter your message.'}
                    </Text>
                </>
            }
            <Group className='mb-3' controlId='titleEmailInput'>
                <Label className='fw-bold'>Title of email</Label>
                <Control
                    type='text'
                    placeholder="Enter title/subject of query"
                    name='subject'
                    onChange={event => { handleOnChange(event as any) }}
                    value={subject}
                />
            </Group>
            <Group className="messageGroup" controlId="formBasicCheckbox">
                <Label className='fw-bold'>*Your message</Label>
                <Control
                    as='textarea'
                    placeholder="Please enter your message here."
                    className='messageTextArea noResize'
                    name='message'
                    style={{ border: didMsgError ? 'solid red .5px' : '1px solid #ced4da' }}
                    onChange={event => { handleOnChange(event as any) }}
                    value={message}
                />
                <Text className="pl-5 text-danger" style={{ fontSize: '8px', height: '20px' }}>
                    {didMsgError && '*This field is required. Please enter your message.'}
                </Text>
            </Group>
            <RobotTest setTest={setTest} test={test} didTestFail={didTestFail} setDidTestFail={setDidTestFail} />
            <div className='position-absolute bottom-0 w-100 d-flex justify-content-center'>
                <Button
                    variant="primary"
                    type="submit"
                    className='submitBtn w-25'
                    // disabled={isSendingEmailModalOn}
                    onClick={event => { handleOnSubmit(event) }}>
                    {/* {isSendingEmailModalOn ? 'Sending email..' : "Submit"} */}
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default ContactForm