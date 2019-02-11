import player from '../../api/PlayerAPI';
import { errorAction, successAction } from './ajaxActions';
import { GET_PLAYERS_STATUS, LOGIN_PLAYER, LOGOUT_PLAYER } from './actionTypes';

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


export function getPlayersStatusAction(data) {
    return {
        type: GET_PLAYERS_STATUS,
        data
    }
}

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

export function requestPlayersStatusAction() {
    return function(dispatch) {
        player.getAllPlayersStatus()
            .then(response => {
                dispatch(getPlayersStatusAction(response.data))
            })
            .catch(error => {
                const message = error.response.data.message;

                dispatch(errorAction(message));
            });
    }
}
