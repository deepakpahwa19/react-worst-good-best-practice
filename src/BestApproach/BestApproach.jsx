import React, { useCallback, useState } from 'react';

import { listOfCountry, listOfGender, listOfCommunication } from '../data/data';
import { RadioButton } from './components/RadioButton';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';

export const BestApproach = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [communicationPreference, setCommunication] = useState('');

    const onClickSubmitHandler = useCallback(() => {
        const payload = {
            name,
            gender,
            country,
            communicationPreference
        };
        console.log(payload);
        // send the payload in API call
    }, [communicationPreference, country, gender, name]);

    return (
        <div className='card flex-column h-4vw'>
            <h3>Best Approach</h3>
            <Text label='Name' updateParent={setName} />
            <Dropdown label='Gender' options={listOfGender} updateParent={setGender} />
            <Dropdown label='I am from' options={listOfCountry} updateParent={setCountry} />
            <RadioButton name='communication' options={listOfCommunication} updateParent={setCommunication} />
            <button onClick={onClickSubmitHandler}>Submit</button>
        </div>
    );
};
