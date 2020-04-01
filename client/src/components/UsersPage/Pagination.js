import React from 'react';
import { NavLink } from 'react-router-dom';

export const Pagination = ({ usersPerPage, totalUsers, paginate, paginateBack, paginateForward, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const lastFivePages = pageNumbers.length - 5;
    const lastTwoPages = pageNumbers.length - 2;

    const calculateIndex =
        currentPage > lastFivePages
            ? currentPage <= lastTwoPages
                ? currentPage - 3
                : lastFivePages
            : currentPage >= 3
            ? currentPage - 3
            : currentPage === 1
            ? currentPage - 1
            : currentPage - 2;

    const calculateLastIndex =
        currentPage > lastFivePages
            ? currentPage <= lastTwoPages
                ? currentPage + 2
                : pageNumbers.length
            : currentPage >= 3
            ? currentPage + 2
            : currentPage === 1
            ? currentPage + 4
            : currentPage + 3;

    const pageButtonClass = (number) =>
        currentPage === number ? 'pagination-item pagination-item-active' : 'pagination-item';

    return (
        <nav className="nav-pagination">
            <button onClick={paginateBack} className="pagination-btn">
                <i className="pagination-icon pagination-icon-left" />
            </button>
            <ul className="pagination">
                {pageNumbers.slice(calculateIndex, calculateLastIndex).map((number) => (
                    <li key={number}>
                        <NavLink
                            to="/users#"
                            className={pageButtonClass(number)}
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
