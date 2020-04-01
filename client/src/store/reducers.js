import { combineReducers } from 'redux';
import * as action_type from './constants.js';
// state for start
const initialState = {
    usersList: [],
    usersStatisticList: [],
};

function contactsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case action_type.SET_USERS:
            return {
                ...state,
                usersList: payload,
            };

        case action_type.SET_USERS_STATISTIC:
            return {
                ...state,
                usersStatisticList: payload,
            };

        case action_type.UPDATE_USERS_STATS:
            const contactList = state.contact_list.slice();
            const findUpdateItemIndex = contactList.findIndex((item) => item._id === payload._id);
            return {
                ...state,
                usersList: state.usersList
                    .slice(0, findUpdateItemIndex)
                    .concat(payload)
                    .slice(findUpdateItemIndex + 1),
            };

        default:
            return state;
    }
}

export const reducer = combineReducers({
    users: contactsReducer,
});
