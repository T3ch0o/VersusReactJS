import { GET_PLAYERS_STATUS } from '../actions/actionTypes';

export default function playersReducer(state = [], action) {
    switch (action.type) {
        case GET_PLAYERS_STATUS:
            return reconcile(state, action.data);
        default:
            return state;
    }
}

function reconcile(oldData, newData) {
    const newDataByUsername = {};
    for (const entry of newData) {
        newDataByUsername[entry.username] = entry;
    }

    const result = [];

    for (const entry of oldData) {
        if (!newDataByUsername[entry.username]) {
            continue;
        }
        if (newDataByUsername[entry.username]) {
            result.push(newDataByUsername[entry.username]);
            delete newDataByUsername[entry.username];
        } else {
            result.push(entry);
        }
    }

    for (const username in newDataByUsername) {
        result.push(newDataByUsername[username]);
    }

    return result;
}
