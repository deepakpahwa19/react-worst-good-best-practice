import React from 'react';

export const Dropdown = ({ label, options, onSelect, value }) => {
    return (
        <div>
            <label>
                <strong>{label}</strong>
            </label>
            <br />
            <select value={value} onChange={onSelect}>
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
