import React from 'react';
import { NavLink } from 'react-router-dom';

export const Pagination = ({ usersPerPage, totalUsers, paginate, paginateBack, paginateForward }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="nav-pagination">
            <button onClick={paginateBack} className="pagination-btn">
                <i className="pagination-icon pagination-icon-left" />
            </button>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <NavLink
                            to="/users#"
                            className="pagination-item"
                            onClick={() => paginate(number)}
                            href="/users#"
                        >
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button onClick={paginateForward} className="pagination-btn">
                <i className="pagination-icon pagination-icon-right" />
            </button>
        </nav>
    );
};
