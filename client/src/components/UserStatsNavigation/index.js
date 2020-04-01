import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './style.scss';

export const UserStatsNavigation = ({ name }) => {
    const { id } = useParams();
    return (
        <div className="user-stats-nav">
            <NavLink className="user-stat-nav-link" to="/">
                Main page >
            </NavLink>
            <NavLink
                activeClassName={!id ? 'user-stat-nav-link__active' : ''}
                className="user-stat-nav-link"
                to="/users"
            >
                User satistics >
            </NavLink>
            {id ? (
                <NavLink
                    activeClassName="user-stat-nav-link__active"
                    className="user-stat-nav-link"
                    to={`/users/${id}`}
                >
                    {name}
                </NavLink>
            ) : null}
        </div>
    );
};
