import React, { useCallback, useState } from 'react';

export const RadioButton = ({ options, name }) => {
    const [value, setValue] = useState('');

    const onChangeHandler = useCallback(event => {
        setValue(event?.target?.value || '');
    }, []);

    return (
        <div className='flex-column'>
            {options.map((option, index) => (
                <label key={`${option}-${index}`}>
                    <input type='radio' name={name} value={option} onChange={onChangeHandler} />
                    {option}
                </label>
            ))}
        </div>
    );
};
