import React from 'react';
import { Link } from 'react-router-dom';

export const LinkWrap = ({ pathName, children }) => {
    return <Link to={pathName}>{children}</Link>;
};
