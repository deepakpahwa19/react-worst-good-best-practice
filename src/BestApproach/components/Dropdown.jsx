import React, { useCallback } from 'react';
import { useState } from 'react';

export const Dropdown = ({ label, options, updateParent, propertyName }) => {
    const [value, setValue] = useState('');

    const onChangeHandler = useCallback(
        event => {
            setValue(event?.target?.value || '');
            updateParent && updateParent({ [propertyName]: event?.target?.value || '' });
        },
        [updateParent, propertyName]
    );

    return (
        <div>
            <label>
                <strong>{label}</strong>
            </label>
            <br />
            <select value={value} onChange={onChangeHandler}>
                <option value='Select'>Select</option>
                {options.map((optionValue, index) => (
                    <option value={optionValue} key={`${optionValue}-${index}`}>
                        {optionValue}
                    </option>
                ))}
            </select>
        </div>
    );
};
