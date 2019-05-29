import {call, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'typescript-fsa';
import {PlacesActions} from './places.actions';
import {get} from '../../api/api';
import {deserializePlace} from './place.interface';

function* loadPlacesSaga({payload}: Action<void>) {
    try {
        const serverPlaces = yield call(get, 'places');
        yield put(PlacesActions.loadPlaces.done({
            params: payload,
            result: serverPlaces.map(deserializePlace),
        }));
    } catch (error) {
        yield put(PlacesActions.loadPlaces.failed({
            params: payload,
            error: error,
        }));
    }
}

export function* placesSaga() {
    yield takeEvery(PlacesActions.loadPlaces.started.type, loadPlacesSaga);
}
