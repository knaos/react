import { SHOW_MESSAGE } from '../actions';

const message = (state = '', action) => {
    switch (action.type) {
        case SHOW_MESSAGE:
            return action.message;
        default: return state;
    }
};

export default message;