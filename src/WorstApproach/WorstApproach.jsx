import React, { useCallback, useState } from 'react';

import { listOfCountry, listOfGender } from '../data/data';

export const WorstApproach = ({ updateInfoToParent }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [communicationPreference, setCommunicationPreference] = useState('');

    const onChangeNameHandler = useCallback(event => {
        setName(event?.target?.value || '');
    }, []);

    const onSubmitFormHandler = useCallback(() => {
        console.log('Worst Approach Updating parent component');
        updateInfoToParent({
            name,
            gender,
            country,
            communicationPreference
        });
    }, [communicationPreference, name, gender, country, updateInfoToParent]);

    console.log(communicationPreference);
    return (
        <form className='flex-column h-4vw' onSubmit={onSubmitFormHandler}>
            <div>
                <label>
                    <strong>Name:</strong>
                </label>
                <br />
                <input type='text' value={name} onChange={onChangeNameHandler} />
            </div>
            <div>
                <label>
                    <strong>Gender:</strong>
                </label>
                <br />
                <select
                    value={gender}
                    onChange={event => {
                        setGender(event.target.value);
                    }}
                >
                    <option value='Select'>Select</option>
                    {listOfGender.map((value, index) => (
                        <option value={value} key={`${value}-${index}`}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>
                    <strong>I am from:</strong>
                </label>
                <br />
                <select
                    value={country}
                    onChange={event => {
                        setCountry(event.target.value);
                    }}
                >
                    <option value='Select'>Select</option>
                    {listOfCountry.map((value, index) => (
                        <option value={value} key={`${value}-${index}`}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex-column'>
                <label>
                    <input
                        type='radio'
                        name='travel'
                        value='Email'
                        onChange={event => {
                            setCommunicationPreference(event.target.value);
                        }}
                    />
                    Email
                </label>
                <label>
                    <input
                        type='radio'
                        name='travel'
                        value='SMS'
                        onChange={event => {
                            setCommunicationPreference(event.target.value);
                        }}
                    />
                    SMS
                </label>
                <label>
                    <input
                        type='radio'
                        name='travel'
                        value='Whatsapp'
                        onChange={event => {
                            setCommunicationPreference(event.target.value);
                        }}
                    />
                    Whatsapp
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};
