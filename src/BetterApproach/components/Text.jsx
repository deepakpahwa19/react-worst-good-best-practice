import React from 'react';

export const Text = ({ label, type, value, onChangeHandler }) => {
    return (
        <div>
            <label>
                <strong>{label}</strong>
            </label>
            <br />
            <input type={type} value={value} onChange={onChangeHandler} />
        </div>
    );
};
