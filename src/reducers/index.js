import { combineReducers } from 'redux';
import users from './users';

const appState = combineReducers({
    users: users,
})

export default appState;