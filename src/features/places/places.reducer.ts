import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {Success} from 'typescript-fsa/dist/typescript-fsa';
import {IPlace} from './place.interface';
import {PlacesStore} from './palces.store.interface';
import {IError, NetworkStatus} from '../common/interfaces';
import {PlacesActions} from './places.actions';
import {Failure} from 'typescript-fsa';
import {PlacesInitialState} from './places.initialState';

export const placesLoading = (state: PlacesStore): PlacesStore => {
    return {
        ...state,
        status: NetworkStatus.STARTED,
        error: undefined,
    };
};

export const placesLoaded = (state: PlacesStore, {result}: Success<void, IPlace[]>): PlacesStore => {
    return {
        data: result,
        status: NetworkStatus.DONE,
        error: undefined,
    };
};

export const placesLoadingError = (state: PlacesStore,  {error}: Failure<void, IError>): PlacesStore => {
    return {
        ...state,
        status: NetworkStatus.FAILED,
        error,
    };
};

export const placesReducer = reducerWithInitialState(PlacesInitialState)
    .case(PlacesActions.loadPlaces.started, placesLoading)
    .case(PlacesActions.loadPlaces.done, placesLoaded)
    .case(PlacesActions.loadPlaces.failed, placesLoadingError)
;
