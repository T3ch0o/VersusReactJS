import { AJAX_BEGIN, AJAX_SUCCESS, AJAX_ERROR} from './actionTypes';

export function beginAction() {
    return {
        type: AJAX_BEGIN
    };
}

export function successAction() {
    return {
        type: AJAX_SUCCESS
    };
}

export function errorAction(message) {
    return {
        type: AJAX_ERROR,
        message
    };
}
