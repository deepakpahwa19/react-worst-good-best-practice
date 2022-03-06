import React, { useCallback, useState } from 'react';

import { listOfCountry, listOfGender, listOfCommunication } from '../data/data';
import { RadioButton } from './components/RadioButton';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';

export const BetterApproach = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [communicationPreference, setCommunicationPreference] = useState('');

    const onChangeNameHandler = useCallback(event => {
        setName(event?.target?.value || '');
    }, []);

    const onClickSubmitHandler = useCallback(() => {
        const payload = {
            name,
            gender,
            country,
            communicationPreference
        };
        console.log(payload);
        // send the payload in API call
    }, [name, gender, country, communicationPreference]);

    return (
        <div className='card flex-column h-4vw'>
            <h3>Better Approach</h3>
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
            <button onClick={onClickSubmitHandler}>Submit</button>
        </div>
    );
};
