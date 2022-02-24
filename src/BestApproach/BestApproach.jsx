import React, { useCallback, useRef } from 'react';

import { listOfCountry, listOfGender, listOfCommunication } from '../data/data';
import { RadioButton } from './components/RadioButton';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';

export const BestApproach = ({ updateInfoToParent }) => {
    const onSubmitFormHandler = useCallback(() => {
        console.log('Best Approach Updating parent component');
        updateInfoToParent({});
    }, [updateInfoToParent]);

    const formDetails = useRef({ name: '', gender: '', country: '', communication: '' });

    const updateFormDetails = useCallback((details = {}) => {
        formDetails.current = { ...formDetails.current, ...details };
        console.log('formDetails => ', formDetails);
    }, []);

    return (
        <form className='flex-column h-4vw' onSubmit={onSubmitFormHandler}>
            <Text label='Name' updateParent={updateFormDetails} propertyName='name' />
            <Dropdown label='Gender' options={listOfGender} updateParent={updateFormDetails} propertyName='gender' />
            <Dropdown label='I am from' options={listOfCountry} />
            <RadioButton name='communication' options={listOfCommunication} />
            <button type='submit'>Submit</button>
        </form>
    );
};
