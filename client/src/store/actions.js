import * as action_type from './constants.js';
import { take, put, all } from 'redux-saga/effects';

import axios from 'axios';

const baseUrl = process.env.PUBLIC_URL;
// actions

// users
export const getUsers = () => ({
    type: action_type.GET_USERS,
});

export const getUsersStatistic = () => ({
    type: action_type.GET_USERS_STATISTIC,
});

export const updateUser = (payload) => ({
    type: action_type.UPDATE_USERS_STATS,
    payload,
});

// Sagas
function* getUsersSaga() {
    while (true) {
        yield take(action_type.GET_USERS);
        const response = yield axios.get(`${baseUrl}/api/users`);

        yield put({
            type: action_type.SET_USERS,
            payload: response.data,
        });
    }
}

function* getUsersStatisticSaga() {
    while (true) {
        yield take(action_type.GET_USERS_STATISTIC);
        const response = yield axios.get(`${baseUrl}/api/users_statistic`);

        yield put({
            type: action_type.SET_USERS_STATISTIC,
            payload: response.data,
        });
    }
}

function* updateUserSaga() {
    while (true) {
        const { payload: updatedContact } = yield take(action_type.UPDATE_USERS_STATS);
        const response = yield axios.put('/concat-api/update-contact', { updatedContact });

        if (response.data.updated) {
            yield put({
                type: action_type.UPDATE_USERS_STATS,
                payload: response.data.updatedContact,
            });
        } else {
            console.log('ERROR WHEN UPDATING USER');
        }
    }
}

export function* rootSaga() {
    console.log('saga');
    yield all([getUsersSaga(), getUsersStatisticSaga(), updateUserSaga()]);
}
