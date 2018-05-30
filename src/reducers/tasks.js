import { RECEIVE_TASKS } from '../actions';

const initialState = []
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return action.tasks.slice();
        default: return state;
    }
}

export default tasks;
