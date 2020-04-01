import React from 'react';
import './style.scss';

export const DealComponent = ({ dealInfo }) => {
    const { title, image, description } = dealInfo;
    return (
        <div className="deal">
            <div className="deal__image-wrap">
                <img className="deal__image-wrap__image" src={image} alt="" />
            </div>
            <h3 className="deal__title">{title}</h3>
            <p className="deal__description">{description}</p>
        </div>
    );
};
