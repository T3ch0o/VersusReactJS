import { AJAX_BEGIN, AJAX_SUCCESS, AJAX_ERROR} from '../actions/actionTypes';

export default function authReducer(state = { begin: false, error: false }, action) {
    switch (action.type) {
        case AJAX_BEGIN:
            return Object.assign({}, state, { begin: true, error: false });
        case AJAX_SUCCESS:
            return Object.assign({}, state, { begin: false, error: false });
        case AJAX_ERROR:
            return Object.assign({}, state, { begin: false, error: true });
        default:
            return state;
    }
};
