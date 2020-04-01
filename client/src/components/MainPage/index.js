import React, { Fragment } from 'react';
import { LeaenMoreComponent } from './Sections/LearnMoreComponent';
import { Button, DealList, OfferList, Subscribe } from '../';
import { SectionTitle } from './Sections/SectionTitle';
import { SectionCards } from './Sections/SectionCards';
import { MobileSvg } from './Sections/LearnMoreComponent/Mobile';
import { MacbookSvg } from './Sections/LearnMoreComponent/Macbook';

export const MainPage = () => {
    return (
        <Fragment>
            <LeaenMoreComponent SectionInfo={firstSection} wave="true" />

            <SectionCards>
                <SectionTitle options={DealsTitle} />
                <DealList />
            </SectionCards>

            <LeaenMoreComponent SectionInfo={SecondSection} macbook={true} />

            <SectionCards background={true}>
                <SectionTitle options={OfferTitle} />
                <OfferList />
            </SectionCards>
            <Subscribe />
        </Fragment>
    );
};

const ViewStatssBtn = {
    title: 'View Stats',
    className: 'learn-more__content__description-wrap__button',
    link: '/users',
};

const LearnMoreBtn = {
    title: 'Learn more',
    className: 'learn-more__content__description-wrap__button',
};

const firstSection = {
    title: 'Brainstorming',
    thinTitle: 'for desired perfect Usability',
    description:
        'Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!',
    button: <Button options={ViewStatssBtn} />,
    image: <MobileSvg />,
};

const SecondSection = {
    title: 'Start Managing your apps business, more faster',
    thinTitle: false,
    description:
        'Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.',
    button: <Button options={LearnMoreBtn} />,
    image: <MacbookSvg />,
};

const DealsTitle = {
    title: 'small business owners love',
    thinTitle: { start: 'Why ', end: ' AppCo?' },
    description:
        'Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!',
};

const OfferTitle = {
    title: 'Afforadble Pricing and Packages ',
    thinTitle: { end: 'choose your best one' },
    description: 'Monotonectally grow strategic process improvements vis-a-vis integrated resources.',
};
