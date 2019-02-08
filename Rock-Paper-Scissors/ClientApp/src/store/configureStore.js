import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

function configureStore() {
    return createStore(combineReducers(reducers), applyMiddleware(thunk));
}

export default configureStore;
