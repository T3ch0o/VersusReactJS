import player from '../../api/PlayerAPI';
import { errorAction } from './ajaxActions';
import { LOGGED_IN_PLAYER } from './actionTypes';

export function registerPlayerAction(payload) {
    return function(dispatch) {
        return player.register(payload)
            .then(response => {
                localStorage.setItem('username', response.data.username);
                dispatch(loggedInPlayerAction());
            })
            .catch(error => {
                dispatch(errorAction());
            });
    }
}

export function loggedInPlayerAction() {
    return {
        type: LOGGED_IN_PLAYER
    };
}
