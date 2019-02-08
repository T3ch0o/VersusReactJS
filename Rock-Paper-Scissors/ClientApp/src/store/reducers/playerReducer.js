import { REGISTER_PLAYER } from '../actions/actionTypes';

export default function playerReducer(state = {}, action) {
    switch (action.type) {
        case REGISTER_PLAYER:
            return Object.assign({}, state);
        default:
            return state;
    }
}
