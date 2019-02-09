import player from '../../api/PlayerAPI';
import { errorAction, successAction } from './ajaxActions';
import { LOGGED_IN_PLAYER } from './actionTypes';

export function registerPlayerAction(payload) {
    return function(dispatch) {
        return player.register(payload)
            .then(response => {
                localStorage.setItem('username', response.data.username);
                dispatch(successAction());
                dispatch(loggedInPlayerAction());
            })
            .catch(error => {
                const message = error.response.data.message;

                dispatch(errorAction(message));
            });
    }
}

export function loggedInPlayerAction() {
    return {
        type: LOGGED_IN_PLAYER
    };
}
