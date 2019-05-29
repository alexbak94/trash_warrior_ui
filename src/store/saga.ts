import {all} from 'redux-saga/effects';
import {placesSaga} from '../features/places/places.saga';
// import {authenticationSaga} from '../features/authentication/authentication.saga';

export function* rootSaga() {
    yield all([
        placesSaga(),
        // authenticationSaga(),
    ]);
}
