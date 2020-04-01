import React from 'react';

export const UserRow = ({
    user: { id, first_name, last_name, email, gender, ip_address },
    totalViews,
    totalClicks,
}) => {
    return (
        <tr className="user-item">
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
