export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const SHOW_MESSAGE = 'SHOW_MESSAGE';


export const addUser = user => ({
    type: ADD_USER,
    user
})

export const deleteUser = id => ({
    type: DELETE_USER,
    id
})

export const addTask = task => ({
    type: ADD_TASK,
    task
})

export const deleteTask = id => ({
    type: deleteTask,
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