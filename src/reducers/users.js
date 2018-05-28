import { ADD_USER, DELETE_USER, LOG_IN, LOG_OUT, RECEIVE_USERS, TOGGLE_ADMIN } from '../actions/index';

const initialState = {
    currentUser: {},
    isAuthenticated: false,
    items: []

}

const users = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return Object.assign({}, state, { currentUser: action.user, isAuthenticated: true })
        case LOG_OUT:
            return Object.assign({}, state, initialState);
        case RECEIVE_USERS:
            return Object.assign({}, state, { items: action.users });
        default:
            return state;
    }
};

export default users;
