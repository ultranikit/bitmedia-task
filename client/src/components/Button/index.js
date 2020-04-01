import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ options: { className, title, link = '/' } }) => {
    return (
        <Link to={link} style={{ display: 'inline-block' }} className={className}>
            {title}
        </Link>
    );
};
