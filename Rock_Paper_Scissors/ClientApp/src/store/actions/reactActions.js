import react from '../../api/ReactAPI';
import { errorAction } from './ajaxActions';
import { logoutPlayerAction } from './playerActions';

export function getReactStatusAction(payload) {
    return function(dispatch) {
        return react.getReactStatus(payload)
            .then(response => {

            })
            .catch(error => {
                const message = error.response.data.message;

                if (message) {
                    dispatch(errorAction(message));
                } else {
                    dispatch(logoutPlayerAction());
                }
            });
    }
}
