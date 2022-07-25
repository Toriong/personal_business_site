import React, { ChangeEvent, FC, useMemo, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { RobotTestObj, RobotTestProps } from '../../interfaces/interfaces';


const { Group, Control, Label, Text } = Form;

// GOAL: the user must passed the test by re-typing the given 5 characters into the input field 

// BRAIN DUMP: 
// display the 5 characters that will randomly produced 
// provide an input for the user 
// provide one state, it will be an object that will hold the following fields: 
// {testingChars: 5 characters at random, userInput: the user input will be inserted here}


// PARTS:

// PART 1: 
// display the random chars onto the screen

// PART 2: 
// display the input field onto the UI 

const RobotTest: FC<RobotTestProps> = ({ setTest, test, didTestFail, setDidTestFail }) => {

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setDidTestFail(false);
        setTest((test: RobotTestObj) => {
            return {
                ...test,
                userInput: value
            }
        })
    };
    const { currentTest, userInput } = test;

    return (
        <Group className='d-flex flex-column pb-5 robotTestContainer'>
            <Label>*Are you a robot?</Label>
            <section className='d-flex testSec'>
                <section className='d-flex justify-content-center align-items-center'>
                    <h6>TEST:</h6>
                </section>
                <section className='d-flex justify-content-center align-items-center ms-2'>
                    <img src={`${window.location.origin}/${currentTest.name}.jpeg`} alt='test_unable_to_load_refresh_page' className='w-100' />
                </section>
            </section>
            <Control
                type='text'
                placeholder="Enter the text above"
                className='testInput mt-2'
                onChange={event => { handleOnChange(event as any) }}
                value={userInput}
                style={{
                    border: didTestFail ? 'red solid 1px' : '1px solid #ced4da',
                    color: didTestFail ? 'red' : '#212529'
                }}
                required
            />
            <Text className='text-danger'>{didTestFail && "*Test failed."}</Text>
        </Group>
    )
}

export default RobotTest