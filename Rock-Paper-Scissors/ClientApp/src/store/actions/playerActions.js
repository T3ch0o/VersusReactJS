import player from '../../api/PlayerAPI';

export function registerPlayerAction(payload) {
    console.log(payload);
    return function(dispatch) {
        return player.register(payload)
            .then(response => {
                localStorage.setItem('username', response.data.username);
            })
    }
}
