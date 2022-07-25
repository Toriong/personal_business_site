import React, { useState, ChangeEvent, MouseEvent, useRef, useContext, useMemo } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RobotTestObj, TestObj } from '../../interfaces/interfaces';
import RobotTest from './RobotTest';
// import robotTestData from '../../data/robotTestData.json'

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
    }
    const [form, setForm] = useState(formDefaultVal);
    const [test, setTest] = useState<RobotTestObj>({ currentTest: _currentTest, userInput: "" });
    const { firstName, lastName, email, phoneNum, subject, message } = form;



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
    const [didMsgError, setDidMsgError] = useState(false);

    const handleOnSubmit = (event: MouseEvent<HTMLButtonElement>) => {

    };



    const presentResponseModal = (headerTxt: string, bodyTxt: string) => {
        // setModalHeader(headerTxt);
        // setModalTxt(bodyTxt);
        // setIsResultsModalForSubmitOn(true);
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {

    };


    return (
        <Form className='pl-5 w-100 position-relative d-flex flex-column justify-content-center justify-content-sm-start contactForm'>
            <section className='row'>
                <section className='col-12'>
                    <h2 className='text-dark display-6 text-center text-lg-start'>Contact us</h2>
                </section>
            </section>
            <Group className="row mt-4 nameInputGroup" controlId="formNameInput">
                <div className='col-6 nameContainerSM'>
                    <Label className='w-100 text-start'>*Name</Label>
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
                <Label>*First Name</Label>
                <Control type="text" placeholder="Enter first name" name='firstName' value={firstName} style={{ color: isFirstNameError ? 'red' : "#212529", border: isFirstNameError ? 'solid red .5px' : '1px solid #ced4da' }} onChange={event => { handleOnChange(event as any) }} />
                {isFirstNameError &&
                    <Text className="pl-5 text-danger" style={{ fontSize: '8px' }}>
                        *This field is required. Please enter first name.
                    </Text>
                }
            </Group>
            <Group className="mb-3 d-block d-sm-none lastNameContainer" controlId="formBasicPassword">
                <Label>*Last Name</Label>
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
                <Label>*Email</Label>
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
                <Label>Phone #</Label>
                <Control
                    type="text"
                    pattern='[0-9]*'
                    placeholder="Enter phone #"
                    name='phoneNum'
                    onChange={event => { handleOnChange(event as any) }}
                    value={phoneNum}
                />
            </Group>
            <Group className='mb-3' controlId='titleEmailInput'>
                <Label>Title of email</Label>
                <Control
                    type='text'
                    placeholder="Enter title/subject of query"
                    name='subject'
                    onChange={event => { handleOnChange(event as any) }}
                    value={subject}
                />
            </Group>
            <Group className="messageGroup" controlId="formBasicCheckbox">
                <Label>*Your message</Label>
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
            <div className='position-absolute bottom-0 w-100 d-flex justify-content-center justify-content-lg-end'>
                <Button
                    variant="primary"
                    type="submit"
                    className='submitBtn'
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