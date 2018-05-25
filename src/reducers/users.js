import { ADD_USER, DELETE_USER, LOG_IN, LOG_OUT } from '../actions/index';

const initialState = {
    currentUser: undefined,
    isAuthenticated: false,

}

const users = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return Object.assign({}, state, { currentUser: action.user, isAuthenticated: true })
        case LOG_OUT:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
};

export default users;
