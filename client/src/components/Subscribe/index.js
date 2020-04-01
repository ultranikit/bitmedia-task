import React from 'react';
import './style.scss';

export const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <div className="subscribe-group">
                <input nnme="email" type="text" className="subscribe-field" placeholder="Enter your email" />
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    );
};
