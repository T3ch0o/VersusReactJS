import react from '../../api/ReactAPI';
import { errorAction } from './ajaxActions';
import { logoutPlayerAction, requestPlayersStatusAction } from './playerActions';
import { GET_REACT_REPLICA } from './actionTypes';
import generateReactReplicas from '../../utils/generateReactReplicas';

export function getReactReplicaAction(handSign, status) {
    const replica = generateReactReplicas(handSign, status);

    return {
        type: GET_REACT_REPLICA,
        replica
    };
}

export function getReactStatusAction(payload) {
    return function(dispatch) {
        return react.getReactStatus(payload)
            .then(response => {
                dispatch(getReactReplicaAction(response.data.handSign, response.data.status));
                dispatch(requestPlayersStatusAction());
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
