import React, { useState, useCallback } from 'react';

export const Text = ({ label, updateParent, propertyName }) => {
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
            <input type='text' value={value} onChange={onChangeHandler} />
        </div>
    );
};
