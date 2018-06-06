import { RECEIVE_TASKS, DELETE_TASK } from '../actions';

const initialState = []
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return action.tasks.slice();
        // case DELETE_TASK:
        //     return state.filter(t => t.id !== action.task.id);
        default: return state;
    }
}

export default tasks;
