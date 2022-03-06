import React, { useCallback } from 'react';
import { useState } from 'react';

export const Dropdown = React.memo(({ label, options, updateParent }) => {
    const [value, setValue] = useState('');

    const onChangeHandler = useCallback(event => {
        setValue(event?.target?.value || '');
    }, []);

    const onBlurHandler = useCallback(() => {
        updateParent(value);
    }, [updateParent, value]);

    return (
        <div>
            <label>
                <strong>{label}</strong>
            </label>
            <br />
            <select value={value} onChange={onChangeHandler} onBlur={onBlurHandler}>
                <option value='Select'>Select</option>
                {options.map((optionValue, index) => (
                    <option value={optionValue} key={`${optionValue}-${index}`}>
                        {optionValue}
                    </option>
                ))}
            </select>
        </div>
    );
});
