import React from 'react';
import { DealComponent } from '../DealComponent';

import './style.scss';

const deals = [
    {
        title: 'Clean Design',
        image: `${process.env.PUBLIC_URL + './img/design.png'}`,
        description: 'Increase sales by showing true dynamics of your website.',
    },
    {
        title: 'Secure Data',
        image: `${process.env.PUBLIC_URL + './img/data.png'}`,
        description: 'Build your online store’s trust using Social Proof & Urgency.',
    },
    {
        title: 'Retina Ready',
        image: `${process.env.PUBLIC_URL + './img/retina.png'}`,
        description: 'Realize importance of social proof in customer’s purchase decision.',
    },
];

export const DealList = () => {
    return (
        <div className="deals-container">
            {deals.map((item, index) => (
                <DealComponent key={index} dealInfo={item} />
            ))}
        </div>
    );
};
