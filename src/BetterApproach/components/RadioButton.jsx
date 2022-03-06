import React from 'react';

export const RadioButton = ({ options, name, onChangeHandler }) => {
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
