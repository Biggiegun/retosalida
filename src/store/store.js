import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from '../reducers/loginReducers';
import {productosReducer} from '../reducers/productosReducer';
import {registerReducer} from '../reducers/registerReducer'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    productos: productosReducer
})

export const store = createStore(
    reducers, 
        composeEnhancers(
            applyMiddleware(thunk) // Middleware....facilitador!!!
        )
);