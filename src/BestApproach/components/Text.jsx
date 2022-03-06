import React, { useState, useCallback } from 'react';

export const Text = React.memo(({ label, updateParent }) => {
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
            <input type='text' value={value} onChange={onChangeHandler} onBlur={onBlurHandler} />
        </div>
    );
});
