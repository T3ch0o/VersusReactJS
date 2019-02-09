import player from '../../api/PlayerAPI';
import { errorAction, successAction } from './ajaxActions';
import { LOGIN_PLAYER, LOGOUT_PLAYER } from './actionTypes';

export function registerPlayerAction(payload) {
    return function(dispatch) {
        return player.register(payload)
            .then(response => {
                localStorage.setItem('username', response.data.username);
                dispatch(successAction());
                dispatch(loginPlayerAction());
            })
            .catch(error => {
                const message = error.response.data.message;

                dispatch(errorAction(message));
            });
    }
}

export function loginPlayerAction() {
    return {
        type: LOGIN_PLAYER
    };
}

export function logoutPlayerAction() {
    localStorage.clear();

    return {
        type: LOGOUT_PLAYER
    };
}
