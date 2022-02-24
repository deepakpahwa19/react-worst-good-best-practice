import React, { useCallback, useState } from 'react';

import { listOfCountry, listOfGender, listOfCommunication } from '../data/data';
import { RadioButton } from './components/RadioButton';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';

export const BetterApproach = ({ updateInfoToParent }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [communicationPreference, setCommunicationPreference] = useState('');

    const onChangeNameHandler = useCallback(event => {
        setName(event?.target?.value || '');
    }, []);

    const onSubmitFormHandler = useCallback(() => {
        console.log('Better Approach Updating parent component');
        updateInfoToParent({
            name,
            gender,
            country,
            communicationPreference
        });
    }, [communicationPreference, name, gender, country, updateInfoToParent]);

    // console.log(communicationPreference);
    return (
        <form className='flex-column h-4vw' onSubmit={onSubmitFormHandler}>
            <Text label='Name' type='text' value={name} onChangeHandler={onChangeNameHandler} />
            {gender !== 'Male' && (
                <Dropdown
                    label='Gender'
                    value={gender}
                    options={listOfGender}
                    onSelect={event => setGender(event.target.value)}
                />
            )}
            <Dropdown label='I am from' options={listOfCountry} onSelect={event => setCountry(event.target.value)} />
            <RadioButton
                name='communication'
                options={listOfCommunication}
                onChangeHandler={event => setCommunicationPreference(event.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};
