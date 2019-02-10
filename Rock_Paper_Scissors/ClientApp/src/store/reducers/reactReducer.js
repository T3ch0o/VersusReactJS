import { GET_REACT_REPLICA } from '../actions/actionTypes';

export default function playerReducer(state = { replica: 'React is ready to smash you.' }, action) {
    switch (action.type) {
        case GET_REACT_REPLICA:
            return Object.assign({}, state, { replica: action.replica });
        default:
            return state;
    }
}
