import { LOGGED_IN_PLAYER, REGISTER_PLAYER } from '../actions/actionTypes';

export default function playerReducer(state = { loggedIn: false }, action) {
    switch (action.type) {
        case REGISTER_PLAYER:
            return Object.assign({}, state);
        case LOGGED_IN_PLAYER:
            return Object.assign({}, state, { loggedIn: true });
        default:
            return state;
    }
}
