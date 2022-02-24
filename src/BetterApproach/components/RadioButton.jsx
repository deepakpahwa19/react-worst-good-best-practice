import React, { useEffect } from 'react';

export const RadioButton = ({ options, name, onChangeHandler }) => {
    useEffect(() => {
        console.log('Mounting RadioButton component');
        return () => {
            console.log('Unmounting RadioButton component');
        };
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
