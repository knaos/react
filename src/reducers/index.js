import { combineReducers } from 'redux';
import users from './users';
import message from './message';

const appState = combineReducers({
    users: users,
    message
})

export default appState;