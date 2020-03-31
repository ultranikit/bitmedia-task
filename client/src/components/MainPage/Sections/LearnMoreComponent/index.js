import React from 'react';
import './style.scss';

export const LeaenMoreComponent = ({ SectionInfo, wave = false, macbook = false}) => {
    const { title, thinTitle = false, description, button, image } = SectionInfo;
    return (
        <div className={wave ? 'learn-more' : 'learn-more-no-wave'}>
            <div className="container">
                <div className={'learn-more__content'}>
                    <div className="learn-more__content__description-wrap">
                        <h2 className={macbook 
                        ? "learn-more__content__description-wrap__title-mac" 
                        : "learn-more__content__description-wrap__title"}>
                            {title}
                            {thinTitle && (
                                <span className="learn-more__content__description-wrap__thin-title"> {thinTitle} </span>
                            )}
                        </h2>
                        <p className={macbook ? "learn-more__content__description-wrap__title-description-mac" : "learn-more__content__description-wrap__title-description"}>{description}</p>
                        {button}
                    </div>
                    <div className="learn-more__content__image-wrap">{image}</div>
                </div>
            </div>
        </div>
    );
};
