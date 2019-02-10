import { GET_REACT_STATUS } from '../actions/actionTypes';

export default function playerReducer(state = { message: '' }, action) {
    switch (action.type) {
        case GET_REACT_STATUS:
            return Object.assign({}, state);
        default:
            return state;
    }
}
