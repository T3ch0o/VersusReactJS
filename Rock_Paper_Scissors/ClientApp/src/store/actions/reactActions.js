import react from '../../api/ReactAPI';
import { errorAction } from './ajaxActions';
import { logoutPlayerAction } from './playerActions';
import { GET_REACT_REPLICA } from './actionTypes';
import generateReactReplicas from '../../utils/generateReactReplicas';

export function getReactStatusAction(payload) {
    return function(dispatch) {
        return react.getReactStatus(payload)
            .then(response => {
                console.log(response);
                dispatch(getReactReplicaAction(response.data.handSign, response.data.status))
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


export function getReactReplicaAction(handSign, status) {
    const replica = generateReactReplicas(handSign, status);

    return {
        type: GET_REACT_REPLICA,
        replica
    };
}
