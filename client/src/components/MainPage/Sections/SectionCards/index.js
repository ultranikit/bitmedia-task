import React from 'react';
import { Ball } from './Ball';
import './style.scss';

export const SectionCards = ({ children, background }) => {
    return (
        <div className="section-cards">
            <div className="container">{children}</div>
            {background && <Ball />}
        </div>
    );
};
