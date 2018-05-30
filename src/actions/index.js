import UsersAPI from "../services/UsersAPI";
import TasksAPI from "../services/TasksAPI";

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const TOGGLE_ADMIN = 'TOGGLE_ADMIN';

export const ADD_TASK = 'ADD_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addUser = user => ({
    type: ADD_USER,
    user
})

export const deleteUser = id => ({
    type: DELETE_USER,
    id
})



export const login = user => ({
    type: LOG_IN,
    user
})

export const logout = () => ({
    type: LOG_OUT
})

export const showMessage = (message) => ({
    type: SHOW_MESSAGE,
    message
});

export const fetchUsers = () => ({
    type: FETCH_USERS
})

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users: users
})

export const toggleAdmin = id => ({
    type: TOGGLE_ADMIN
})


export const receiveTasks = () => {
    const tasks = TasksAPI.getAll();
    return {
        type: RECEIVE_TASKS,
        tasks
    }
}

export const addTask = (task) => {

    return { type: addTask };
}