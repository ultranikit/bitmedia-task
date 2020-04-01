import React from 'react';
import './style.scss';
import { OfferComponent, Button } from '../';

export const OfferList = () => {
    return (
        <div className="offer-container">
            {offers.map((item, index) => (
                <OfferComponent key={index} offerInfo={item} />
            ))}
        </div>
    );
};

const options = {
    title: 'Purchase now',
    className: 'offer__button',
    onClick: () => console.log('purchase'),
};

const offers = [
    {
        title: 'Basic',
        image: `${process.env.PUBLIC_URL + './img/offer-basic.png'}`,
        price: 29,
        description:
            'Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7 Phone Support 2 months technical support 2+ profitable keyword',
        button: <Button options={options} />,
    },
    {
        title: 'Standard',
        image: `${process.env.PUBLIC_URL + './img/offer-standard.png'}`,
        price: 149,
        description:
            'Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7 Phone Support 2 months technical support 2+ profitable keyword',
        button: <Button options={options} />,
    },
    {
        title: 'Unlimited',
        price: 39,
        image: `${process.env.PUBLIC_URL + './img/offer-unlimited.png'}`,
        description:
            'Push Notifications Data Transfer SQL Database Search & SEO Analytics 24/7 Phone Support 2 months technical support 2+ profitable keyword',
        button: <Button options={options} />,
    },
];
