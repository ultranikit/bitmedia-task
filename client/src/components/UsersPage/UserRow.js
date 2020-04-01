import React from 'react';
import { useHistory } from 'react-router-dom';

export const UserRow = ({
    user: { id, first_name, last_name, email, gender, ip_address },
    totalViews,
    totalClicks,
}) => {
    const history = useHistory();
    const routeToUserDetails = () => history.push(`/users/${id}`);

    return (
        <tr onClick={routeToUserDetails} className="user-item">
            <td className="user-item-info">{id}</td>
            <td className="user-item-info">{first_name}</td>
            <td className="user-item-info">{last_name}</td>
            <td className="user-item-info">{email}</td>
            <td className="user-item-info">{gender}</td>
            <td className="user-item-info">{ip_address}</td>
            <td className="user-item-info user-table-total-clicks">{totalClicks}</td>
            <td className="user-item-info user-table-total-views">{totalViews}</td>
        </tr>
    );
};
