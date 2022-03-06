import React from 'react';

export const RadioButton = React.memo(({ options, name, updateParent }) => {
    return (
        <div className='flex-column'>
            {options.map((option, index) => (
                <label key={`${option}-${index}`}>
                    <input
                        type='radio'
                        name={name}
                        value={option}
                        onChange={event => updateParent(event.target.value)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
});
