import React from 'react';
import { UserRow } from './UserRow';

export const UserList = ({ usersList, usersStatisticList }) => {
    return (
        <table className="users-table">
            <thead className="user-table-thead">
                <tr>
                    <th className="user-head">id</th>
                    <th className="user-head">First name</th>
                    <th className="user-head">Last name</th>
                    <th className="user-head">Email</th>
                    <th className="user-head">Gender</th>
                    <th className="user-head">IP address</th>
                    <th className="user-head">Total clicks</th>
                    <th className="user-head">Total page views</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map((user) => {
                    const filterUserStats = usersStatisticList.filter((item) => item.user_id === user.id);
                    const totalClicks = filterUserStats
                        .map((item) => Number(item.clicks))
                        .reduce((prev, cur) => prev + cur);
                    const totalViews = filterUserStats
                        .map((item) => Number(item.page_views))
                        .reduce((prev, cur) => prev + cur);
                    return <UserRow key={user.id} user={user} totalViews={totalViews} totalClicks={totalClicks} />;
                })}
            </tbody>
        </table>
    );
};
