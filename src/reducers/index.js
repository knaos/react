import { combineReducers } from 'redux';
import users from './users';
import message from './message';
import tasks from './tasks';

const appState = combineReducers({
    users: users,
    message,
    tasks
})

export default appState;;