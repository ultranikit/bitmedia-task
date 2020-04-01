import React from 'react';
import { LinkWrap } from '../LinkWrap';
import './style.scss';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-bar">
                    <LinkWrap pathName="/">
                        <span className="navigation__link">AppCo</span>
                    </LinkWrap>
                    <span className="footer-reserved">All rights reserved by ThemeTags</span>
                    <span className="footer-copyright">Copyrights © 2019.</span>
                </div>
            </div>
        </div>
    );
};
