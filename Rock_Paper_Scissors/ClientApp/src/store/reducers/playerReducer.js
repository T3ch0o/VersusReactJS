import { LOGIN_PLAYER, LOGOUT_PLAYER } from '../actions/actionTypes';

export default function playerReducer(state = { loggedIn: false }, action) {
    switch (action.type) {
        case LOGIN_PLAYER:
            return Object.assign({}, state, { loggedIn: true });
        case LOGOUT_PLAYER:
            return Object.assign({}, state, { loggedIn: false });
        default:
            return state;
    }
}
