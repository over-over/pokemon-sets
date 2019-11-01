import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const stringMiddleware = () => (next) => (action) => {

    if(typeof action === 'string') {
            return next({
                type: action
            });
        }

    return next(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware));

export default store;