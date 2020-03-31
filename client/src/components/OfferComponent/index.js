import React from 'react';
import './style.scss';

export const OfferComponent = ({ offerInfo }) => {
    const { title, image, price, description, button } = offerInfo;
    return (
        <div className="offer">
            <h3 className="offer__title">{title}</h3>

            <div className="offer__image-wrap">
                <img className="offer__image-wrap__image" src={image} alt="" />
            </div>
            <p className="offer__price">${price}</p>
            <p className="offer__description">{description}</p>
            {button}
        </div>
    );
};
