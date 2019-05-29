import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {Success} from 'typescript-fsa/dist/typescript-fsa';
import {IPlace} from './place.interface';
import {IError, NetworkStatus} from '../common/interfaces';
import {Failure} from 'typescript-fsa';
import {SelectedPlacesStore} from './selectedPlaces.store.interface';
import {SelectedPlacesInitialState} from './selectedPlaces.initialState';
import {PlacesActions} from './places.actions';

export const selectedSelectedPlacesLoading = (state: SelectedPlacesStore): SelectedPlacesStore => {
    return {
        ...state,
        status: NetworkStatus.STARTED,
        error: undefined,
    };
};

export const selectedSelectedPlacesLoaded = (state: SelectedPlacesStore, {result}: Success<void, IPlace[]>): SelectedPlacesStore => {
    return {
        data: result,
        status: NetworkStatus.DONE,
        error: undefined,
    };
};

export const selectedSelectedPlacesLoadingError = (state: SelectedPlacesStore,  {error}: Failure<void, IError>): SelectedPlacesStore => {
    return {
        ...state,
        status: NetworkStatus.FAILED,
        error,
    };
};

export const selectedPlacesReducer = reducerWithInitialState(SelectedPlacesInitialState)
    .case(PlacesActions.loadSelectedPlaces.started, selectedSelectedPlacesLoading)
    .case(PlacesActions.choosePlace.started, selectedSelectedPlacesLoading)
    .case(PlacesActions.loadSelectedPlaces.done, selectedSelectedPlacesLoaded)
    .case(PlacesActions.loadSelectedPlaces.failed, selectedSelectedPlacesLoadingError)
;
