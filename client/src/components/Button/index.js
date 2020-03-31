import React from 'react';

export const Button = ({ options: { className, title, onClick } }) => {
    return (
        <button style={{ display: 'block' }} className={className} onClick={onClick}>
            {title}
        </button>
    );
};
