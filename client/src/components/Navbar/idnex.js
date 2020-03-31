import React from 'react';
import { LinkWrap } from '../';
import './style.scss';

export const Navbar = () => {
    return (
        <div className="navigation">
            <div className="container">
                <LinkWrap pathName="/">
                    <span className="navigation__link">AppCo</span>
                </LinkWrap>
            </div>
        </div>
    );
};
