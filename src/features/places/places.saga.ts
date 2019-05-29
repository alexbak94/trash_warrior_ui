import {call, put, takeEvery} from 'redux-saga/effects';
import {Action} from 'typescript-fsa';
import {PlacesActions} from './places.actions';
import {DELETE, GET, POST} from '../../api/api';
import {deserializePlace, IPlace} from './place.interface';

function* loadPlacesSaga({payload}: Action<void>) {
    try {
        const serverPlaces = yield call(GET, 'places');
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

function* loadSelectedPlacesSaga({payload}: Action<void>) {
    try {
        const serverPlaces = yield call(GET, 'selected-places');
        yield put(PlacesActions.loadSelectedPlaces.done({
            params: payload,
            result: serverPlaces.map(deserializePlace),
        }));
    } catch (error) {
        yield put(PlacesActions.loadSelectedPlaces.failed({
            params: payload,
            error: error,
        }));
    }
}

function* choosePlaceSaga({payload}: Action<{place: IPlace, index: number}>) {
    try {
        const places = yield call(GET, 'places');
        places.splice(payload.index, 1);
        yield call(POST, places, 'places');
        const selectedPlaces = yield call(GET, 'selected-places');
        selectedPlaces.push(payload.place);
        yield call(POST, selectedPlaces, 'selected-places');
        yield put(PlacesActions.loadPlaces.started());
    } catch (error) {
        console.error(error);
    }
}

export function* placesSaga() {
    yield takeEvery(PlacesActions.loadPlaces.started.type, loadPlacesSaga);
    yield takeEvery(PlacesActions.loadSelectedPlaces.started.type, loadSelectedPlacesSaga);
    yield takeEvery(PlacesActions.choosePlace.started.type, choosePlaceSaga);
}
