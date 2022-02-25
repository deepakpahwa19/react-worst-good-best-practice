import React from 'react';

export const RadioButton = ({ options, name }) => {
    return (
        <div className='flex-column'>
            {options.map((option, index) => (
                <label key={`${option}-${index}`}>
                    <input type='radio' name={name} value={option} onChange={() => {}} />
                    {option}
                </label>
            ))}
        </div>
    );
};
