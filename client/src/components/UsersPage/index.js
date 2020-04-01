import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUsers, getUsersStatistic } from '../../store';
import { UserList } from './UserList';
import { Pagination } from './Pagination';
import './style.scss';

const mapStateToProps = (state) => ({
    usersList: state.users.usersList,
    usersStatisticList: state.users.usersStatisticList,
});

const actionCreators = {
    getUsers,
    getUsersStatistic,
};

export const UsersPage = connect(
    mapStateToProps,
    actionCreators,
)((props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [usersPerPage] = useState(50);
    const { usersList, usersStatisticList, getUsers, getUsersStatistic } = props;

    useEffect(() => {
        getUsers();
        getUsersStatistic();
    }, [getUsers, getUsersStatistic]);

    // Get current posts
    const indexOflastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOflastUser - usersPerPage;
    const currentUsers = usersList.slice(indexOfFirstUser, indexOflastUser);

    // Change page number
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const paginateBack = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    const paginateForward = () => {
        const lastPage = Math.ceil(usersList.length / usersPerPage);
        if (currentPage !== lastPage) setCurrentPage(currentPage + 1);
    };
    return (
        <div className="container">
            <h1 className="table-name">Users statistics</h1>
            {usersList && usersStatisticList.length ? (
                <Fragment>
                    <UserList usersList={currentUsers} usersStatisticList={usersStatisticList} />
                    <Pagination
                        usersPerPage={usersPerPage}
                        totalUsers={usersList.length}
                        paginate={paginate}
                        paginateBack={paginateBack}
                        paginateForward={paginateForward}
                    />
                </Fragment>
            ) : null}
        </div>
    );
});
