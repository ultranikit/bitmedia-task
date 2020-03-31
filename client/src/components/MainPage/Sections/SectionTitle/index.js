import React from 'react';
import './style.scss';

export const SectionTitle = ({ options: { title, description, thinTitle } }) => {
    return (
        <div className="section-wrap">
            <h2 className="section-wrap__title">
                {thinTitle.start && <span className="section-wrap__thin-title">{thinTitle.start}</span>}
                {title}
                <span className="section-wrap__thin-title">{thinTitle.end}</span>
            </h2>
            <p className="section-wrap__description">{description}</p>
        </div>
    );
};
