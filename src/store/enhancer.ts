import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

//tslint:disable:no-any
const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

export const sagaMiddleware = createSagaMiddleware();

export function configureEnhancer() {
    let enhancer;

    if (process.env.NODE_ENV !== 'production') {
        enhancer = composeEnhancers(
            applyMiddleware(
                thunk,
                sagaMiddleware,
                logger
            )
        );
    } else {
        enhancer = composeEnhancers(
            applyMiddleware(
                thunk,
                sagaMiddleware,
            )
        );
    }

    return enhancer;
}
